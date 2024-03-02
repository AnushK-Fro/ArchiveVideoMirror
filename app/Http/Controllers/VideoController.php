<?php

namespace App\Http\Controllers;

use App\Models\RedditVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Jobs\ProcessRedditMedia;
class VideoController extends Controller
{
    public function show_videos() {
        $videos = RedditVideo::orderBy('views', 'desc') // Order by views in descending order
        ->take(10)                     // Take only the top 10 results
        ->get()                        // Get the results
        ->map(function ($video) {
            return [
                'id' => $video->id,
                'title' => $video->title,
                'description' => $video->description, // assuming you have a description field
                'uploader' => $video->author,
                'views' => strval($video->views),
                'video_url' => $video->video_url,
                'nsfw' => $video->nsfw ? 'true' : 'false',
                'subreddit' => $video->subreddit,
            ];
        });

        return Inertia::render('Videos', ['videos' => $videos]);
    }

    public function show_id(string $id) {
        $video = RedditVideo::where('id', $id)->first();
        if ($video) {
            if ($video->mirrored === 'completed') {
                $video->increment('views');
                return Inertia::render('VideoPlayer', [
                    'title' => $video->title,
                    'video_url' => $video->video_url,
                    'nsfw' => $video->nsfw ? 'true' : 'false',
                    'views' => strval($video->views),
                    'subreddit' => $video->subreddit,
                    'reddit_id' => $video->reddit_id,
                    'author' => $video->author
                ]);
            }
        }
        return Inertia::render('Reddit', [
            'errors' => ['There was an error processing your video. Perhaps it was an invalid URL?']
        ]);
    }

    public function show_sharelink(string $subreddit, string $share_link)
    {
        $response = Http::withOptions([
            'allow_redirects' => true
        ])->get('https://reddit.com/r/' . $subreddit . '/s/' . $share_link);
        $finalUrl = (string) $response->effectiveUri();
        $path = parse_url($finalUrl, PHP_URL_PATH);
        $segments = explode('/', $path);
        $postid = $segments[4] ?? null;
        return $this->show($subreddit, $postid);
    }
    public function show(string $subreddit, string $postid)
    {
        $video = RedditVideo::where('reddit_id', $postid)->first();

        if ($video) {
            if ($video->mirrored === 'completed') {
                $video->increment('views');
                return Redirect('/library/post/' . $video->id);
            }
        }

        $url = "https://www.reddit.com/r/$subreddit/comments/$postid/.json";
        $response = Http::get($url);
        if ($response->successful()) {
            $data = $response->json();
            // Check if it's a crosspost
            if (isset($data[0]["data"]["children"][0]["data"]["crosspost_parent_list"])) {
                $video_url = $data[0]["data"]["children"][0]["data"]["crosspost_parent_list"][0]["secure_media"]["reddit_video"]["fallback_url"];
                $has_audio = $data[0]["data"]["children"][0]["data"]["crosspost_parent_list"][0]["secure_media"]["reddit_video"]["has_audio"];
            }  elseif (isset($data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["fallback_url"])) {
                $video_url = $data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["fallback_url"];
                $has_audio = $data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["has_audio"];
            } else {
                $video_url = $data[0]["data"]["children"][0]["data"]["url"];
                $has_audio = "no";
            }
            $title = $data[0]["data"]["children"][0]["data"]["title"];
            $is_nsfw = $data[0]["data"]["children"][0]["data"]["over_18"];
            $upvotes = strval($data[0]["data"]["children"][0]["data"]["ups"]);
            $upvote_ratio = strval($data[0]["data"]["children"][0]["data"]["upvote_ratio"]*100);
            $author = $data[0]["data"]["children"][0]["data"]["author"];
            $subreddit = $data[0]["data"]["children"][0]["data"]["subreddit"];
            if (!$video) {
                return Inertia::render('ArchiveVideo', [
                    'title' => $title,
                    'post_id' => $postid,
                    'video_url' => $video_url,
                    'has_audio' => $has_audio,
                    'is_nsfw' => $is_nsfw,
                    'upvotes' => $upvotes,
                    'upvote_ratio' => $upvote_ratio,
                    'author' => $author,
                    'subreddit' => $subreddit
                ]);
            }
            if ($video->mirrored === 'pending') {
                return Inertia::render('PendingMirror', [
                    'title' => $title,
                    'video_url' => $video_url,
                    'has_audio' => $has_audio,
                    'is_nsfw' => $is_nsfw,
                    'upvotes' => $upvotes,
                    'upvote_ratio' => $upvote_ratio,
                    'author' => $author,
                    'subreddit' => $subreddit
                ]);
            }
        } else {
            return Inertia::render('Reddit', [
                'errors' => ['There was an error processing your video. Perhaps it was an invalid URL?']
            ]);
        }
    }

    public function mirror(string $subreddit, string $postid) {
        $url = "https://www.reddit.com/r/$subreddit/comments/$postid/.json";
        $response = Http::get($url);

        if ($response->successful()) {
            $data = $response->json();
            $title = $data[0]["data"]["children"][0]["data"]["title"];
            if (isset($data[0]["data"]["children"][0]["data"]["crosspost_parent_list"])) {
                $video_url = $data[0]["data"]["children"][0]["data"]["crosspost_parent_list"][0]["secure_media"]["reddit_video"]["fallback_url"];
                $has_audio = $data[0]["data"]["children"][0]["data"]["crosspost_parent_list"][0]["secure_media"]["reddit_video"]["has_audio"];
                preg_match('/v.redd.it\/([a-zA-Z0-9]+)\//', $video_url, $matches);
                $unique_id = $matches[1];
                $audio_url = "https://v.redd.it/$unique_id/DASH_AUDIO_128.mp4";
            } elseif (isset($data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["fallback_url"])) {
                $video_url = $data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["fallback_url"];
                $has_audio = $data[0]["data"]["children"][0]["data"]["secure_media"]["reddit_video"]["has_audio"];
                preg_match('/v.redd.it\/([a-zA-Z0-9]+)\//', $video_url, $matches);
                $unique_id = $matches[1];
                $audio_url = "https://v.redd.it/$unique_id/DASH_AUDIO_128.mp4";
            } else {
                $video_url = $data[0]["data"]["children"][0]["data"]["url"];
                $audio_url = "is_image";
            }

            $is_nsfw = $data[0]["data"]["children"][0]["data"]["over_18"];
            $upvotes = strval($data[0]["data"]["children"][0]["data"]["ups"]);
            $upvote_ratio = strval($data[0]["data"]["children"][0]["data"]["upvote_ratio"]*100);
            $author = $data[0]["data"]["children"][0]["data"]["author"];
            $subreddit = $data[0]["data"]["children"][0]["data"]["subreddit"];

            $path = parse_url($video_url, PHP_URL_PATH);
            $file_extension = pathinfo($path, PATHINFO_EXTENSION);

            if(!(RedditVideo::where('reddit_id', $postid)->count() >= 1)) {
                if ($file_extension === "mp4") {
                    $filetype = "video";
                } else {
                    $filetype = "image";
                }
                RedditVideo::create([
                    'reddit_id' => $postid,
                    'mirrored' => "pending",
                    "video_url" => "https://cdn2.archivevideomirror.com/" . $postid . "." . $file_extension,
                    "views" => 0,
                    "subreddit" => $subreddit,
                    "author" => $author,
                    "title" => $title,
                    "nsfw" => $is_nsfw,
                    "filetype" => $filetype
                ]);
                ProcessRedditMedia::dispatch($video_url, $audio_url, $postid, $filetype, $file_extension);
            }
        }
        return Redirect('/r/' . $subreddit . '/comments/' . $postid);
    }
}
