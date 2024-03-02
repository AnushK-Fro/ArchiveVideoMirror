<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reddit_videos', function (Blueprint $table) {
            $table->id();
            $table->string('reddit_id')->unique();
            $table->string('mirrored');
            $table->string('video_url');
            $table->integer('views');
            $table->string("subreddit");
            $table->string('author');
            $table->string('title');
            $table->boolean('nsfw');
            $table->string('filetype');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reddit_videos');
    }
};
