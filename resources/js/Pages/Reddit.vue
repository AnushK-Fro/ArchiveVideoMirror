<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import RedditRedirectForm from '@/Components/RedditRedirectForm.vue';

</script>
<script>
export default {
    props: {
        errors: Array
    }
}
</script>

<template>
    <AppLayout title="Reddit Video Downloader">
        <template #header>
          <Head>
            <meta name="description" content="Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free.">
          </Head>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Reddit Video Downloader with Audio
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div v-if="errors.length" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium" v-for="error in errors" :key="error">{{ error }}</span>
                </div>
                <RedditRedirectForm></RedditRedirectForm>
                <br />
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4">

                    <div class="text-gray-600 dark:text-gray-400">
                        <p>Download your favorite Reddit videos effortlessly and for free. Enter the URL and start downloading in seconds!</p>
                    </div>
                    <!-- Features Section -->
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Exclusive Features</h3>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>Instant and free downloads of Reddit videos</li>
                        <li>Support for various resolutions and formats</li>
                        <li>User-friendly interface for seamless navigation</li>
                        <li>No registration required - download videos anonymously</li>
                        <li>Built-in video converter for versatile format options</li>
                        <li>High-speed download with no speed limits</li>
                        <li>Compatible with all devices and platforms</li>
                    </ul>
                    <!-- How It Works Section -->
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">How It Works</h3>
                    <p class="text-gray-600 dark:text-gray-400">Paste the Reddit video link on our downloader. Our tool fetches the video in your preferred format and resolution. Just click download and enjoy your video offline, anytime, anywhere!</p>

                </div>
                <br />
                <div class="bg-orange-500 text-white p-4 rounded">
                    <h3 class="text-lg font-semibold">Download Reddit Videos Even Faster!</h3>
                    <p>Just replace <b>reddit.com</b> in the URL with <b>beta.archivevideomirror.com</b> to download or mirror a video!</p>
                </div>
                <br />
                <div class="bg-green-500 text-white p-4 rounded">
                    <h3 class="text-lg font-semibold">Completely Free</h3>
                    <p>Our Reddit Video Downloader is completely free to use! Reliable, fast, and free - the perfect solution for your video downloading needs! Just enter in a Reddit URL above and press enter, you can immediately download a video or choose to save it on our servers (in case it gets deleted, or maybe to share)!</p>
                </div>
                <br />
            </div>
        </div>
    </AppLayout>

</template>
