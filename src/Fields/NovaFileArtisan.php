<?php

namespace Mostafaznv\NovaFileArtisan\Fields;

use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\SupportsDependentFields;
use Mostafaznv\Larupload\Enums\LaruploadFileType;
use Mostafaznv\Larupload\Storage\Attachment;
use Mostafaznv\NovaFileArtisan\Traits\HandlesValidation;


class NovaFileArtisan extends File
{
    use SupportsDependentFields, HandlesValidation;

    public $component   = 'nova-file-artisan';
    public $textAlign   = 'center';
    public $showOnIndex = true;
    public $prunable    = true;

    public array $coverRules = [
        'nullable', 'file', 'mimetypes:image/jpeg,image/png', 'mimes:png,jpg,jpeg'
    ];

    public $laruploadRules         = [];
    public $laruploadCreationRules = [];
    public $laruploadUpdateRules   = [];

    /**
     * @var bool|callable
     */
    protected mixed $hideCoverFromDetail  = false;
    protected ?bool $displayCoverUploader = null;


    public function __construct(string $label, string $attachment)
    {
        parent::__construct($label, $attachment);

        $this->displayUsing(
            fn($value, $model) => $model->attachment($attachment)->urls()
        );

        $this->preview(
            function ($value, $disk, $model) use ($attachment) {
                $this->value = $model->id
                    ? $model->attachment($attachment)->url()
                    : null;


                return $this->value;
            }
        );

        $this->thumbnail(
            function ($value, $disk, $model) use ($attachment) {
                if ($model->id) {
                    return $model->attachment($attachment)->url('cover');
                }

                return null;
            }
        );

        $this->downloadResponseCallback = function (NovaRequest $request, $model) use ($attachment) {
            $style = $request->query('style') ?? 'original';

            if ($style == 'original') {
                return $model->attachment($attachment)->download();
            }


            $meta = $model->attachment($attachment)->meta();
            $a = $this->attachment($model, $attachment);

            if ($meta->type == LaruploadFileType::VIDEO->name) {
                $styles = $a->getVideoStyles();
            }
            else if ($meta->type == LaruploadFileType::IMAGE->name) {
                $styles = $a->getImageStyles();
            }
            else {
                $styles = [];
            }


            foreach ($styles as $key => $value) {
                if (strtolower($key) == strtolower($style)) {
                    $style = $key;
                }
            }

            $response = $model->attachment($attachment)->download($style);

            if (is_null($response)) {
                abort(404);
            }

            return $response;
        };


        $this->storageCallback = function (NovaRequest $request, $model) use ($attachment) {
            $file = $request->file("$attachment.original");
            $cover = $request->file("$attachment.cover");

            if ($file) {
                $model->attachment($attachment)->attach($file, $cover);
            }
            else if ($request->isUpdateOrUpdateAttachedRequest() and $cover) {
                if (!$model->attachment($attachment)->url()) {
                    abort(400);
                }

                $model->attachment($attachment)->cover()->update($cover);
            }

            return [];
        };

        $this->deleteCallback = function (NovaRequest $request, $model) use ($attachment) {
            if ($this->isPrunable()) {
                if ($request->query('cover') === 'true') {
                    $model->attachment($attachment)->cover()->detach();
                }
                else {
                    $model->attachment($attachment)->detach();
                }
            }

            return [];
        };
    }


    protected function fillAttribute(NovaRequest $request, $requestAttribute, $model, $attribute): mixed
    {
        $this->validate($request, $attribute);

        $originalAttribute = "$attribute.original";
        $coverAttribute = "$attribute.cover";

        if ($request->file($originalAttribute)) {
            $attribute = $originalAttribute;
            $requestAttribute = $originalAttribute;
        }
        else if ($request->file($coverAttribute)) {
            $attribute = $coverAttribute;
            $requestAttribute = $coverAttribute;
        }

        return parent::fillAttribute($request, $requestAttribute, $model, $attribute);
    }

    private function attachment($resource, ?string $attribute = null): ?Attachment
    {
        $attachments = $resource->attachments();

        foreach ($attachments as $attachment) {
            if ($attachment->getName() == $attribute) {
                return $attachment;
            }
        }

        return null;
    }

    public function hideCoverFromDetail(bool|callable $callback = true): self
    {
        $this->hideCoverFromDetail = $callback;

        return $this;
    }

    public function hideCoverUploader(): self
    {
        $this->displayCoverUploader = false;

        return $this;
    }

    public function coverIsHiddenFromDetail(NovaRequest $request)
    {
        return with($this->hideCoverFromDetail, function ($callback) use ($request) {
            if ($callback === true || (is_callable($callback) && call_user_func($callback, $request))) {
                return true;
            }

            return false;
        });
    }

    public function jsonSerialize(): array
    {
        return with(app(NovaRequest::class), function ($request) {
            $attachment = $this->attachment($this->resource, $this->attribute);

            return [
                ...parent::jsonSerialize(),

                'playerDirection' => config('nova-file-artisan.ui.player.dir'),
                'playerMaxHeight' => config('nova-file-artisan.ui.player.max-height', '160px'),

                'showCoverOnDetail'    => $this->coverIsHiddenFromDetail($request) === false,
                'displayCoverUploader' => $this->displayCoverUploader !== null
                    ? $this->displayCoverUploader
                    : ($attachment?->getGenerateCoverStatus() ?? true)
            ];
        });
    }
}
