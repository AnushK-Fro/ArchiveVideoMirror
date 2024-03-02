<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


Route::get('/reddit', function () {
    return Inertia::render('Reddit');
})->name('reddit');


Route::get('/library/post/{id}', [\App\Http\Controllers\VideoController::class, 'show_id'])->name('video_id');
Route::get('/r/{subreddit}/comments/{post_id}/{any}', [\App\Http\Controllers\VideoController::class, 'show'])->name('video');
Route::get('/r/{subreddit}/comments/{post_id}', [\App\Http\Controllers\VideoController::class, 'show'])->name('video');
Route::get('/r/{subreddit}/s/{share_link}', [\App\Http\Controllers\VideoController::class, 'show_sharelink'])->name('share_link');
Route::get('/mirror/reddit/{subreddit}/{post_id}', [\App\Http\Controllers\VideoController::class, 'mirror'])->name('mirror');

Route::get('/download', function () {
    return Inertia::render('download');
})->name('download');

Route::get('/library', [\App\Http\Controllers\VideoController::class, 'show_videos'])->name('library');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
