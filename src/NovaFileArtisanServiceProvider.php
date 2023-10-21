<?php

namespace Mostafaznv\NovaFileArtisan;

use Laravel\Nova\Nova;
use Illuminate\Support\ServiceProvider;


class NovaFileArtisanServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Nova::serving(function() {
            Nova::script('nova-file-artisan', __DIR__ . '/../dist/field.js');
            Nova::style('nova-file-artisan', __DIR__ . '/../dist/field.css');
        });

        if ($this->app->runningInConsole()) {
            $this->publishes([__DIR__ . '/../config/config.php' => config_path('nova-file-artisan.php')], 'config');
        }
    }

    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'nova-file-artisan');
    }
}
