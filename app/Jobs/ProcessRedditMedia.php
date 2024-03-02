<?php

namespace App\Jobs;

use App\Models\RedditVideo;
use Exception;
use FFMpeg\FFMpeg;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Process;

class ProcessRedditMedia implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $videoUrl;
    protected $audioUrl;
    protected $postId;
    protected $fileType;
    protected $fileExtension;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($videoUrl, $audioUrl, $postId, $fileType, $fileExtension)
    {
        $this->videoUrl = $videoUrl;
        $this->audioUrl = $audioUrl;
        $this->postId = $postId;
        $this->fileType = $fileType;
        $this->fileExtension = $fileExtension;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->fileType === "video") {
            // Download Video
            $videoContent = file_get_contents($this->videoUrl);
            $videoPath = 'temp_video.mp4';
            file_put_contents($videoPath, $videoContent);

            // Initialize mergedPath
            $mergedPath = 'storage/' . $this->postId . '.mp4';

            // Attempt to download Audio
            $audioContent = @file_get_contents($this->audioUrl);

            if ($audioContent !== false) {
                // Audio Downloaded Successfully
                $audioPath = 'temp_audio.mp3';
                file_put_contents($audioPath, $audioContent);

                // Merge Video and Audio using ffmpeg command line
                $process = new Process([
                    'ffmpeg',
                    '-i', $videoPath,
                    '-i', $audioPath,
                    '-c:v', 'copy',
                    '-c:a', 'aac',
                    '-strict', 'experimental',
                    $mergedPath
                ]);
                $process->run();

                // Check if the process was successful
                if (!$process->isSuccessful()) {
                    RedditVideo::where('reddit_id', $this->postId)->delete();
                    throw new \RuntimeException($process->getErrorOutput());
                }

                // Cleanup Local Files
                unlink($audioPath);
            } else {
                // Audio URL is Forbidden or Failed, Use Only Video
                copy($videoPath, $mergedPath);
            }

            // Store the merged or single video file
            Storage::disk('sftp')->put('/var/www/html/' . $this->postId . '.mp4', file_get_contents($mergedPath));

            // Cleanup Local Files
            unlink($videoPath);
            unlink($mergedPath);

            // Update database status
            RedditVideo::where('reddit_id', $this->postId)->update(['mirrored' => 'completed']);
        } else {
            $imageContent = file_get_contents($this->videoUrl);
            if ($imageContent === false) {
                // Handle the error, e.g., log it or throw an exception
                throw new Exception("Failed to download the image from: " . $this->videoUrl);
            }
            Storage::disk('sftp')->put('/var/www/html/' . $this->postId . "." . $this->fileExtension, $imageContent);
            RedditVideo::where('reddit_id', $this->postId)->update(['mirrored' => 'completed']);
        }
    }

    // Delete if failed
    public function failed(Exception $exception) {
        RedditVideo::where('reddit_id', $this->postId)->delete();
    }
}
