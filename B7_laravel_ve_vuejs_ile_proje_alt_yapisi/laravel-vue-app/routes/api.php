<?php

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

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

/*Route::get('/users', function () {
    //abort: laravel üzerinden hata döndürmek istediğimizde kullanırız.
    if (rand(1, 10) < 3) { //1-10 arasında rastgele sayı oluşturup 3den küçük ise bir hata gönderme işlemi yapıldı.
        abort(500, 'Bir hata oluştu!');
    }
    //faker kütüphanesi kullanarak 10 tane kayıt oluşturma.
    return factory(App\User::class, 10)->make();
//    return factory('App\User', 10)->make();
//    return [
//        ['id' => 1, 'name' => "Tamer", 'email' => "tamerkaralurt@gmail.com"],
//        ['id' => 2, 'name' => "Tamer2", 'email' => "tamerkaralurt@gmail.com2"],
//    ];
// php artisan config:cache //cache üzerindeki config bilgilerini silip yerine yeni güncel config dosyalarını çeker. .env gibi
});*/

/*Route::get('/users', function () {
    $users = \App\User::all();
    return response()->json(['users' => $users], 200);
//    return response()->json(\App\User::all(),200);
//    return \App\User::all();
});*/

Route::get('/users', function () {
    $users = \App\User::all();
//    //Resource sınıfları "new" anahtarı ile kullanıldığında sadece bir kayıt çekebildiğimiz yapılarak olarak kullanırız.
//    return new UserResource(App\User::find(1));
//    //Resource sınıfını toplu bir veri çekerken kullanmak istersek,
//    //Resource kullandığımızda oluşan veriler "data" kapsayıcısı içinde otomatik olarak gelmektedir. Bunu kaldırmak için resource'un "withoutWrapping" özelliğini çağırmamız gerekmektedir.
//    UserResource::withoutWrapping();
//    return UserResource::collection(App\User::all());
//    //Sayfalandırma yapmak istersek.
    return UserResource::collection(App\User::paginate(10));
});

