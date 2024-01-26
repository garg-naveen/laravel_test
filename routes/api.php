<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\PostController;
use App\Http\Controllers\Api\V1\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// using auth api / auth token
// Route::middleware('auth:api')->prefix('v1')->group(function() {
//     Route::get('/user', function (Request $request) {
//         return $request->user();
//     });
// });


Route::group(['middleware'=> 'auth:sanctum', 'prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function() {
    // Route::apiResource('/users', UserController::class);

    Route::post('/users', [UserController::class, 'index'])->name('users.index');
    Route::post('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::post('/comments', [CommentController::class, 'index'])->name('comments.index');

    Route::post('/logout', [UserController::class, 'logout'])->name('users.logout');    
});

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function() {
    Route::post('/register',[UserController::class,'register'])->name('users.register');
    Route::post('/token',  [UserController::class, 'getToken'])->name('users.getToken');
});

