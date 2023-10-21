# Nova File Artisan

[![GitHub license](https://img.shields.io/github/license/mostafaznv/nova-file-artisan?style=flat-square)](https://github.com/mostafaznv/nova-file-artisan/blob/main/LICENSE)
[![Packagist Downloads](https://img.shields.io/packagist/dt/mostafaznv/nova-file-artisan?style=flat-square&logo=packagist)](https://packagist.org/packages/mostafaznv/nova-file-artisan)
[![Latest Version on Packagist](https://img.shields.io/packagist/v/mostafaznv/nova-file-artisan.svg?style=flat-square&logo=composer)](https://packagist.org/packages/mostafaznv/nova-file-artisan)


Nova File Artisan is a package that integrates [Larupload](https://github.com/mostafaznv/larupload) with Laravel Nova. Larupload is a file uploader for Laravel, which is based on ORM and allows users to upload `images`, `videos`, `audios`, and other known file formats.

With `Nova File Artisan`, you can use the features of both packages to create a admin panel for your Laravel project. You can upload and display various types of files (such as images, videos, audio, etc.) in your Nova resources. You can also transform your files (such as `resizing`, `cropping`, `compressing`, etc.) using Larupload's methods. You can also set your upload settings (such as disk, path, visibility, etc.) using Larupload's options.

Nova File Artisan is simple to install and use, and it supports multiple file systems (such as local, s3, sftp, etc.).

----
I am on an open-source journey 🚀, and I wish I could solely focus on my development path without worrying about my financial situation. However, as life is not perfect, I have to consider other factors.

Therefore, if you decide to use my packages, please kindly consider making a donation. Any amount, no matter how small, goes a long way and is greatly appreciated. 🍺

[![Donate](https://mostafaznv.github.io/donate/donate.svg)](https://mostafaznv.github.io/donate)

----

### Some features for Nova Artisan Field:

* Display a wide variety of file types, such as video, audio, and HLS, with exceptional quality.
* Automatic resizing and cropping of photos and videos.
* Automatic creation of multiple sizes for videos and images.
* Support for creating and displaying HTTP Live Streaming (HLS) from video sources.
* Automatic generation of cover images for video files.
* Ability to upload a custom cover for each file.
* Built-in support for image optimization.
* Extraction of image width and height.
* Extraction of video width, height, and duration.
* Extraction of audio duration.
* Extraction of the dominant color from images and videos.
* Download button for each file style.
* Compatibility with various storage drivers.
* All [Larupload](https://github.com/mostafaznv/larupload) features are accessible in Nova File Artisan.



## Requirements:

- PHP 8.2 or higher
- Larupload 1.0.4 or higher
- Laravel 10.4.1 or higher
- Nova 4.27 or higher


## Installation and Usage
> [!NOTE]  
> Ensure that you have already installed and configured the Larupload package in your Laravel application. If you haven't done so, please refer to the Larupload [documentation](https://github.com/mostafaznv/larupload) for instructions on installation and usage. **It's important to create attachments for each model before proceeding with Nova File Artisan.**

1. ##### Install the package via composer:
```shell
composer require mostafaznv/nova-file-artisan
```

2. ##### Publish config file:
```shell
php artisan vendor:publish --provider="Mostafaznv\NovaFileArtisan\NovaFileArtisanServiceProvider"
```

3. ##### Prepare Migration & Model (for more information, see [Larupload documentation](https://github.com/mostafaznv/larupload))

###### Migration
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Mostafaznv\Larupload\Enums\LaruploadMode;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->upload('main_file', LaruploadMode::HEAVY);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
```

###### Model
```php
<?php

namespace App\Models;

use FFMpeg\Format\Video\X264;
use Illuminate\Database\Eloquent\Model;
use Mostafaznv\Larupload\Enums\LaruploadMediaStyle;
use Mostafaznv\Larupload\Enums\LaruploadMode;
use Mostafaznv\Larupload\Traits\Larupload;
use Mostafaznv\Larupload\Storage\Attachment as LaruploadAttachment;


class Attachment extends Model
{
    use Larupload;

    public function attachments(): array
    {
        return [
            LaruploadAttachment::make('main_file')
                ->image('thumbnail', 640, 480)
                ->image('retina', 1280, 960)
                ->video('SD', 640, 480)
                ->video('HD', 1920, 1080)
                ->stream(
                    name: '480p',
                    width: 640,
                    height: 480,
                    format: (new X264)
                        ->setKiloBitrate(1000)
                        ->setAudioKiloBitrate(32)
                )
                ->stream(
                    name: '720p',
                    width: 1280,
                    height: 720,
                    format: (new X264)
                        ->setKiloBitrate(3000)
                        ->setAudioKiloBitrate(64)
                )
        ];
    }
}

```

4. ##### Prepare Nova Resource
```php
<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use App\Models\Attachment as Model;
use Mostafaznv\NovaFileArtisan\Fields\NovaFileArtisan;


class Attachment extends Resource
{
    public static string $model = Model::class;

    public static $title = 'title';


    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Title')->rules('required', 'max:255'),

            NovaFileArtisan::make('Main File', 'main_file'),
        ];
    }
}
```

That's it, you're ready to go!


## Get Attachment Metadata
You can print extracted metadata from your files using `NovaFileArtisanMeta` field. This field is a read-only field, and it is only used to display metadata.

```php  
<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use App\Models\Attachment as Model;
use Mostafaznv\NovaFileArtisan\Fields\NovaFileArtisan;
use Mostafaznv\NovaFileArtisan\Fields\NovaFileArtisanMeta;


class Attachment extends Resource
{
    public static string $model = Model::class;

    public static $title = 'title';


    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('Title')->rules('required', 'max:255'),

            NovaFileArtisan::make('Main File', 'main_file'),

            // print all metadata
            ...NovaFileArtisanMeta::make('main_file')->all(),
            
            // or print specific metadata
            NovaFileArtisanMeta::make('main_file')->fileName(),
            NovaFileArtisanMeta::make('main_file')->size(),
            NovaFileArtisanMeta::make('main_file')->mimeType(),
            NovaFileArtisanMeta::make('main_file')->width(),
            NovaFileArtisanMeta::make('main_file')->height(),
            NovaFileArtisanMeta::make('main_file')->duration(),
            NovaFileArtisanMeta::make('main_file')->format(),
        ];
    }
}
```


## Notes

### Pruning Files
Nova's `prunable` method does not work with `NovaFileArtisan` field as expected. As you may know, in `Larupload`, there is an option to turn on/off `preserve-files`. This option is used to prevent files from being deleted when the model is deleted from the database, and it aligns with the behavior expected from the `prunable` method. Therefore, if you want to keep files when the model is deleted, you should set `preserve-files` to `true`. You can do this either in your Larupload [configuration](https://mostafaznv.gitbook.io/larupload/advanced-usage/configuration/preserve-files) file or in your file [attachment instance](https://mostafaznv.gitbook.io/larupload/advanced-usage/attachment/preserve-files).



----

I am on an open-source journey 🚀, and I wish I could solely focus on my development path without worrying about my financial situation. However, as life is not perfect, I have to consider other factors.

Therefore, if you decide to use my packages, please kindly consider making a donation. Any amount, no matter how small, goes a long way and is greatly appreciated. 🍺

[![Donate](https://mostafaznv.github.io/donate/donate.svg)](https://mostafaznv.github.io/donate)

----


## License

This software is released under [The MIT License (MIT)](LICENSE.txt).
