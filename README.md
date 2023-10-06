# Nova Larupload

[![GitHub license](https://img.shields.io/github/license/mostafaznv/nova-larupload?style=flat-square)](https://github.com/mostafaznv/nova-larupload/blob/master/LICENSE)
[![Packagist Downloads](https://img.shields.io/packagist/dt/mostafaznv/nova-larupload?style=flat-square&logo=packagist)](https://packagist.org/packages/mostafaznv/nova-larupload)
[![Latest Version on Packagist](https://img.shields.io/packagist/v/mostafaznv/nova-larupload.svg?style=flat-square&logo=composer)](https://packagist.org/packages/mostafaznv/nova-larupload)


Nova Larupload is a package that integrates [Larupload](https://github.com/mostafaznv/larupload) with Laravel Nova. Larupload is a file uploader for Laravel, which is based on ORM and allows users to upload `images`, `videos`, `audios`, and other known file formats.

With `Nova Larupload`, you can use the features of both packages to create a admin panel for your Laravel project. You can upload and display various types of files (such as images, videos, audio, etc.) in your Nova resources. You can also transform your files (such as `resizing`, `cropping`, `compressing`, etc.) using Larupload's methods. You can also set your upload settings (such as disk, path, visibility, etc.) using Larupload's options.

Nova Larupload is simple to install and use, and it supports multiple file systems (such as local, s3, sftp, etc.).

----
I am on an open-source journey 🚀, and I wish I could solely focus on my development path without worrying about my financial situation. However, as life is not perfect, I have to consider other factors.

Therefore, if you decide to use my packages, please kindly consider making a donation. Any amount, no matter how small, goes a long way and is greatly appreciated. 🍺

[![Donate](https://mostafaznv.github.io/donate/donate.svg)](https://mostafaznv.github.io/donate)

----

## Requirements:

- PHP 8.2 or higher
- Larupload 1.0.2 or higher
- Laravel 10.4.1 or higher
- Nova 4.27 or higher


## Installation and Usage
> [!NOTE]  
> Ensure that you have already installed and configured the Larupload package in your Laravel application. If you haven't done so, please refer to the Larupload [documentation](https://github.com/mostafaznv/larupload) for instructions on installation and usage. **It's important to create attachments for each model before proceeding with Nova Larupload.**

To get started, you will need to install the following dependency:

```shell
composer require mostafaznv/nova-larupload
```

Then, you should add NovaLarupload field to your resources:
```php
<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use App\Models\Attachment as Model;
use Mostafaznv\NovaLarupload\Fields\NovaLarupload;


class Attachment extends Resource
{
    public static string $model = Model::class;

    public static $title = 'title';


    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Title')->rules('required', 'max:255'),

            NovaLarupload::make('Main File', 'main_file'),
        ];
    }
}
```

That's it, you're ready to go!


## Get Attachment Metadata
You can print extracted metadata from your files using `NovaLaruploadMeta` field. This field is a read-only field, and it is only used to display metadata.

```php  
<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use App\Models\Attachment as Model;
use Mostafaznv\NovaLarupload\Fields\NovaLarupload;
use Mostafaznv\NovaLarupload\Fields\NovaLaruploadMeta;


class Attachment extends Resource
{
    public static string $model = Model::class;

    public static $title = 'title';


    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Title')->rules('required', 'max:255'),

            NovaLarupload::make('Main File', 'main_file'),

            // print all metadata
            ...NovaLaruploadMeta::make('main_file')->all(),
            
            // or print specific metadata
            NovaLaruploadMeta::make('main_file')->fileName(),
            NovaLaruploadMeta::make('main_file')->size(),
            NovaLaruploadMeta::make('main_file')->mimeType(),
            NovaLaruploadMeta::make('main_file')->width(),
            NovaLaruploadMeta::make('main_file')->height(),
            NovaLaruploadMeta::make('main_file')->duration(),
            NovaLaruploadMeta::make('main_file')->format(),
        ];
    }
}
```


----

I am on an open-source journey 🚀, and I wish I could solely focus on my development path without worrying about my financial situation. However, as life is not perfect, I have to consider other factors.

Therefore, if you decide to use my packages, please kindly consider making a donation. Any amount, no matter how small, goes a long way and is greatly appreciated. 🍺

[![Donate](https://mostafaznv.github.io/donate/donate.svg)](https://mostafaznv.github.io/donate)

----


## License

This software is released under [The MIT License (MIT)](LICENSE.txt).
