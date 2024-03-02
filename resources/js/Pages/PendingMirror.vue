<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import RedditRedirectForm from '@/Components/RedditRedirectForm.vue';
import VideoAudioMixer from '@/Components/VideoAudioMixer.vue';

const props = defineProps({
    title: {
        type: String
    },
    video_url: {
        type: String
    },
    has_audio: {
        type: String
    },
    is_nsfw: {
        type: String
    },
    upvotes: {
        type: String
    },
    upvote_ratio: {
        type: String
    },
    author: {
        type: String
    },
    subreddit: {
        type: String
    }
});
</script>
<script>
export default {
    props: {
        errors: Array
    }
}
setTimeout(function(){
    window.location.reload(1);
}, 5000);
</script>

<template>
    <AppLayout title="Reddit Video Downloader">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Reddit Video Downloader with Audio
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4">

                    <div class="text-gray-600 dark:text-gray-400">
                        <p>This video is currently pending a mirror to our server and will automatically refresh once the video has finished mirroring. You may also download this video instantly if you do not want to wait for a mirror.</p>
                        <br />
                        <p><b>Video Title:</b> {{$props?.title}}</p>
                        <p><b>Adult Only:</b> {{$props?.is_nsfw}}</p>
                        <p><b>Upvotes:</b> {{$props?.upvotes}}</p>
                        <p><b>Upvote Ratio:</b> {{$props?.upvote_ratio}}%</p>
                        <p><b>Author:</b> {{$props?.author}}</p>
                        <p><b>Subreddit:</b> {{$props?.subreddit}}</p><br />
                        <video-audio-mixer :title="props.title" :video_url="props.video_url" :has_audio="props.has_audio"></video-audio-mixer>

                    </div>
            </div>
        </div>
        </div>
    </AppLayout>
</template>
