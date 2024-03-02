<script setup>
import { computed } from 'vue';
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
    reddit_id: {
        type: String
    },
    nsfw: {
        type: String
    },
    author: {
        type: String
    },
    subreddit: {
        type: String
    },
    views: {
        type: String
    }
});

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
const isImage = computed(() => imageExtensions.some(ext => props.video_url.endsWith(ext)));
const isVideo = computed(() => props.video_url.endsWith('.mp4'));
import { ref } from 'vue';
const title = ref(props.title);
</script>


<template>
    <AppLayout title="Reddit Content Viewer">
        <link crossorigin="anonymous" href="https://vjs.zencdn.net/7.19.2/video-js.css" rel="stylesheet"/>
        <template #header>
          <Head>
            <title>{{ title }}</title>
            <meta name="description" content="Watch this video and thousands of other videos on our completely free-to-use platform!">
          </Head>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ isVideo ? 'Video Player' : 'Image Viewer' }}
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <div class="float-left mr-5">
                        <!-- Video Player -->

                        <video crossorigin="anonymous" v-if="isVideo" ref="videoPlayer" class="video-js vjs-default-skin " controls preload="auto" width="640" height="360">
                            <source :src="video_url" type="video/mp4" />
                        </video>
                        <!-- Image Viewer -->
                        <img crossorigin="anonymous" v-if="isImage" :src="video_url" alt="content image" width="640" height="360" />
                    </div>
                    <h2 class="text-2xl font-bold text-white">{{ props?.title }}</h2><br />
                    <div class="text-base font-semibold text-white">
                        <p><b>Author:</b> {{props?.author}}</p>
                        <p><b>Subreddit:</b> {{props?.subreddit}}</p>
                        <p><b>Views:</b> {{props?.views}}</p>
                        <p><b>Adult Only:</b> {{props?.nsfw}}</p>
                    </div>
                    <br />
                    <video-audio-mixer :title="props.title" :video_url="props.video_url" :has_audio="props.has_audio"></video-audio-mixer>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, () => {
            this.player.log('onPlayerReady', this);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>
