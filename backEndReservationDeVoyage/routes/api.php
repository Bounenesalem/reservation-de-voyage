<?php

use App\Http\Controllers\AgencyController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\registerController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
route::apiResource('destination',DestinationController::class);
route::apiResource('agency',AgencyController::class);
route::apiResource('trip',TripController::class)->shallow();
route::apiResource('booking',BookingController::class);
route::apiResource('users',UserController::class);
Route::get('agency/{id}/trip', [AgencyController::class, 'getTrips']);
Route::post('trip/{id}/reserve', [BookingController::class, 'reserve']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

route::post('/home',[HomeController::class,'index']);
route::get('/search',[SearchController::class,'search']);




// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/users', [UserController::class, 'index']);
//     Route::get('/users/{id}', [UserController::class, 'show']);
//     Route::post('/users', [UserController::class, 'store']);
//     Route::put('/users/{id}', [UserController::class, 'update']);
//     Route::delete('/users/{id}', [UserController::class, 'destroy']);
// });


// Route::post('register',[registerController::class,'register'] );
// Route::post('login',[registerController::class,'login'] );
