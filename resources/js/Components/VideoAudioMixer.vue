<template>
    <div>
        <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="processFile" :disabled="processing">{{ processing ? 'Processing...' : 'Download' }}</button>
    </div>
</template>

<script>
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export default {
    props: {
        title: String,
        video_url: String,
        has_audio: Boolean
    },
    data() {
        return {
            processing: false,
            ffmpeg: createFFmpeg({ log: true }),
        };
    },
    methods: {
        getFileExtension(url) {
            return url.split('.').pop().split(/\#|\?/)[0];
        },
        async processFile() {
            this.processing = true;

            try {
                const fileExtension = this.getFileExtension(this.video_url);
                console.log('File extension:', fileExtension);

                if (['jpeg', 'jpg', 'gif', 'png'].includes(fileExtension)) {
                    // Handle image file
                    const response = await fetch(this.video_url);
                    const imageBlob = await response.blob();
                    const tempLink = document.createElement('a');
                    tempLink.href = URL.createObjectURL(imageBlob);
                    tempLink.setAttribute('download', `archivevideomirror_image.${fileExtension}`);
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                } else {
                    // Handle video file
                    if (!this.ffmpeg.isLoaded()) {
                        await this.ffmpeg.load();
                    }

                    this.ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(this.video_url));

                    if (this.has_audio) {
                        const baseUrl = this.video_url.substring(0, this.video_url.lastIndexOf('/') + 1);
                        const audioUrl = `${baseUrl}DASH_AUDIO_128.mp4`;
                        console.log('Audio URL:', audioUrl);
                        this.ffmpeg.FS('writeFile', 'audio.mp4', await fetchFile(audioUrl));
                        await this.ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp4', '-c:v', 'copy', '-c:a', 'aac', 'output.mp4');
                    } else {
                        await this.ffmpeg.run('-i', 'video.mp4', '-c', 'copy', 'output.mp4');
                    }

                    const data = this.ffmpeg.FS('readFile', 'output.mp4');
                    const blob = new Blob([data.buffer], { type: 'video/mp4' });

                    const tempLink = document.createElement('a');
                    tempLink.href = URL.createObjectURL(blob);
                    tempLink.setAttribute('download', 'archivevideomirror_video.mp4');
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                }
            } catch (error) {
                console.error('Error processing file:', error);
                alert('There was an error processing the file.');
            } finally {
                this.processing = false;
            }
        },
    },
};
</script>
