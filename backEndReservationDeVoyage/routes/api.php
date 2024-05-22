<?php

use App\Http\Controllers\AgencyController;
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
route::resource('users',UserController::class);
Route::get('agency/{id}/trip', [AgencyController::class, 'getTrips']);
// Route::post('agency/{agencyId}/trip', [TripController::class, 'addTripToAgency']);
// Route::post('/agency/{agencyId}/trip', [AgencyController::class, 'addTripToAgency']);

Route::post('register',[registerController::class,'register'] );
Route::post('login',[registerController::class,'login'] );
route::post('/home',[HomeController::class,'index']);
route::get('/search',[SearchController::class,'search']);
// route::get('/destination/{id}',[DestinationController::class,'show']);



// // // إضافة رحلة جديدة لوكالة معينة
// Route::post('/agency/{agencyId}/trip', [TripController::class, 'store']);

// // جلب جميع الرحلات الخاصة بوكالة معينة
// Route::get('/agency/{agencyId}/trip', [TripController::class, 'index']);
