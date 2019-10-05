<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\Resource; //Resource kullandığımızda eklenen alan.
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
//        Burada yapılan "withoutWrapping()" tanımlaması ise tüm resource tanımlarında "data" eklentisini kaldırmaya yarar.
//        Resource::withoutWrapping();
    }
}
