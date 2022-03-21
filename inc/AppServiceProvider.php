<?php

namespace App;

use WPN\App;
use WPN\Providers\ServiceProvider;
use WPN\Support\Assets\GoogleFont;
use WPN\Support\Assets\Script;
use WPN\Support\Assets\Style;

class AppServiceProvider extends ServiceProvider
{
    protected function boot(App $app)
    {
        $app->init(__DIR__.'/config/app.php');

        GoogleFont::load('lato', 'https://fonts.googleapis.com/css?family=Lato');
        
        Style::load('css/app.css');

        Script::load('js/app.js')
              ->localize('theme', [...Script::ajaxData()]);
    }
}