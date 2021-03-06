<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->bindArticleService();//注册文章服务
        $this->bindRequestApiService();//注册requestApi

    }

    public function bindArticleService()
    {
        $this->app->bind('articleservice', function($app) {
            return $app->make('App\Services\ArticleService');
        });
    }

    public function bindRequestApiService()
    {
        $this->app->singleton('requestapi', function ($app) {
            return $app->make('App\Libs\RequestApiLibrary');
        });
    }
}
