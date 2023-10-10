<?php

namespace Mostafaznv\NovaLarupload;

use Laravel\Nova\Nova;
use Illuminate\Support\ServiceProvider;


class NovaLaruploadServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Nova::serving(function() {
            Nova::script('nova-larupload', __DIR__ . '/../dist/field.js');
            Nova::style('nova-larupload', __DIR__ . '/../dist/field.css');
        });
    }
}
