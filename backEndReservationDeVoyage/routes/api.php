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


    // Route::post('/trip/{trip}/reserve', [BookingController::class, 'reserve']);
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/trip/{trip}/reserve', [BookingController::class, 'reserve']);
        Route::get('/user/{user}/bookings', [BookingController::class, 'userBookings']);
        Route::delete('/reservation/{reservation}', [BookingController::class, 'cancel']);

    });


route::apiResource('destination',DestinationController::class);
route::apiResource('agency',AgencyController::class);
route::apiResource('trip',TripController::class)->shallow();
route::apiResource('bookings',BookingController::class);
Route::get('agency/{id}/trip', [AgencyController::class, 'getTrips']);
Route::get('/bookings', [BookingController::class, 'getBookings']);
// Route::apiResource('/user', UserController::class);

Route::get('/pending-bookings', [BookingController::class, 'getPendingBookings']);
Route::put('/bookings/{id}/approve', [BookingController::class, 'approveBooking']);
Route::put('/bookings/{id}/reject', [BookingController::class, 'rejectBooking']);




Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

route::post('/home',[HomeController::class,'index']);
route::get('/search',[SearchController::class,'search']);








