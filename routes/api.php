<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

 /* Route::resource('v1/divisions', App\Http\Controllers\Api\V1\DivisionController::class);  */

/*
Route::get('/divisions', function () {
    return DivisionResource::collection(Divisions::all());
});
 */

Route::prefix('v1')->group(function() {
    Route::get('divisions',[App\Http\Controllers\Api\V1\DivisionController::class, 'index']);
    Route::get('divisions/{id}',[App\Http\Controllers\Api\V1\DivisionController::class, 'show']);
    Route::delete('divisions/{id}',[App\Http\Controllers\Api\V1\DivisionController::class, 'destroy']);
    Route::put('divisions/{id}',[App\Http\Controllers\Api\V1\DivisionController::class, 'update']);
    Route::post('divisions/',[App\Http\Controllers\Api\V1\DivisionController::class, 'store']);

});
