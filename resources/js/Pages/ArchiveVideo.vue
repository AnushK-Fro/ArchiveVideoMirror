<script setup>
import {Head, Link, router} from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import {reactive} from "vue";
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
    },
    post_id: {
        type: String
    }
});
</script>

<template>
    <AppLayout title="Welcome">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <center>


                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" crossorigin="anonymous" src="https://img.icons8.com/doodle/48/question-mark--v1.png" alt="Question"/>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ props?.title }}</h5>
                            <br />
                            <span class="text-sm text-gray-500 dark:text-gray-400">Mirroring will save a permanent copy of the video on our servers. Downloading will download a copy of the video to your browser. Mirroring may take a <b>few minutes</b>, downloading will take a <b>few seconds</b>. Download button may not work properly for images, you may have to mirror first and then download.</span>
                            <div class="flex mt-4 md:mt-6">
                                <video-audio-mixer :title="props.title" :video_url="props.video_url" :has_audio="props.has_audio"></video-audio-mixer>
                                <a :href="`/mirror/reddit/${subreddit}/${post_id}`"  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Mirror (~3 min)</a>
                            </div>
                            <br />
                            <span class="text-sm text-gray-500 dark:text-gray-400"><b>Video Statistics</b></span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Upvotes: {{props?.upvotes }} (Ratio: {{props?.upvote_ratio}}%)</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Post Author: {{props?.author}}</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Post Subreddit: {{props?.subreddit}}</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Marked as NSFW: {{props?.is_nsfw}}</span>
                              
                            <br />
                        </div>
                    </div>

                </center>
            </div>
        </div>
    </AppLayout>
</template>
