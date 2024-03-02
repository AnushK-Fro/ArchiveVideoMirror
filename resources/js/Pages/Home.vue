<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
</script>


<template>
    <AppLayout title="Download Reddit Videos">
        <template #header>
          <Head>
            <meta name="description" content="Download and mirror Reddit videos in the highest quality possible with audio for completely free! Save or archive videos on our platform for free.">
          </Head>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Archive Video Mirror
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-4">

            <div class="text-gray-600 dark:text-gray-400">
                <p>Welcome to Archive Video Mirror, the premier platform for securely archiving and mirroring your favorite videos. Our service ensures that you never lose access to valuable content, providing a reliable backup and easy retrieval of your videos.</p>
            </div>
        <!-- Features Section -->
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Features</h3>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>High-quality video mirroring and archiving</li>
                <li>User-friendly interface for easy navigation and management</li>
                <li>Secure storage with advanced encryption</li>
                <li>Quick retrieval and playback of archived videos</li>
                <li>Support for multiple video formats</li>
            </ul>
        <!-- How It Works Section -->
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">How It Works</h3>
            <p class="text-gray-600 dark:text-gray-400">Simply upload your videos to our platform, and we handle the rest. Our system mirrors your videos, storing them securely and making them easily accessible to you at any time for as long as we can store them for. You can also download videos, free of charge.</p>

                </div>
                <br />
                <!-- Call to Action Section -->
                <div class="bg-blue-500 text-white p-4 rounded">
                    <h3 class="text-lg font-semibold">Get Started with AVM Today</h3>
                    <p>Start mirroring and downloading your videos on a variety of websites!</p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
