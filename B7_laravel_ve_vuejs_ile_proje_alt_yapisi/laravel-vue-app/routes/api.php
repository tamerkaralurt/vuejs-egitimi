<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', function () {
    //faker kütüphanesi kullanarak 10 tane kayıt oluşturma.
    return factory(App\User::class, 10)->make();
//    return factory('App\User', 10)->make();
    /*return [
        ['id' => 1, 'name' => "Tamer", 'email' => "tamerkaralurt@gmail.com"],
        ['id' => 2, 'name' => "Tamer2", 'email' => "tamerkaralurt@gmail.com2"],
    ];*/
});
