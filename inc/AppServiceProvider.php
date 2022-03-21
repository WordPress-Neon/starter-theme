<?php

namespace App;

use WPN\App;
use WPN\Providers\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    protected function boot(App $app)
    {
        $app->init(__DIR__.'/config/app.php');
    }
}