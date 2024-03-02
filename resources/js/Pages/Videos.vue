<template>
    <AppLayout title="Video Library">
        <template #header>
          <Head>
            <meta name="description" content="Browse our video and image library of mirrored videos and images with audio.">
          </Head>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
               Mirrored Video and Image Library
            </h2>

        </template>

        <!-- Grid of Video Cards -->
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="bg-blue-500 text-white p-4 rounded">
                <h3 class="text-lg font-semibold">Mirrored Videos</h3>
                <p>This section contains the top 10 most popular videos and images that have been mirrored by our website</p>
            </div>
            <br />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Loop through videos and create a card for each video -->
                <div v-for="video in videos" :key="video.id" class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <!-- <img class="w-full h-48 object-cover" :src="video.thumbnail" alt="Video Thumbnail"> -->
                    <div class="p-4">
                        <a :href="`/library/post/${video.id}/`"><h5 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">{{ video.title }}</h5></a>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ video.description }}</p>
                        <div class="text-gray-500 dark:text-gray-300 text-xs flex justify-between">
                            <span>By {{ video.uploader }}</span>
                            <span>{{ video.views }} views</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- Page Content -->
        <main>
            <slot />
        </main>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
const props = usePage().props;
const videos = props.videos || [];



</script>
