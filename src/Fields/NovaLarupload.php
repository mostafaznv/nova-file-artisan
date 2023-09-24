<?php

namespace Mostafaznv\NovaLarupload\Fields;

use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\SupportsDependentFields;
use Mostafaznv\NovaLarupload\Traits\HandlesValidation;


class NovaLarupload extends File
{
    use SupportsDependentFields, HandlesValidation;

    public $component   = 'nova-larupload';
    public $textAlign   = 'center';
    public $showOnIndex = true;
    public $prunable    = true;

    public array $coverRules = [
        'nullable', 'file', 'mimetypes:image/jpeg,image/png', 'mimes:png,jpg,jpeg'
    ];

    public $laruploadRules         = [];
    public $laruploadCreationRules = [];
    public $laruploadUpdateRules   = [];


    public function __construct(string $label, string $attachment)
    {
        parent::__construct($label, $attachment);

        $this->displayUsing(
            fn($value, $model) => $model->attachment($attachment)->urls()
        );

        $this->preview(
            function($value, $disk, $model) use ($attachment) {
                $this->value = $model->id
                    ? $model->attachment($attachment)->url()
                    : null;


                return $this->value;
            }
        );

        $this->thumbnail(
            function($value, $disk, $model) use ($attachment) {
                if ($model->id) {
                    return $model->attachment($attachment)->url('cover');
                }

                return null;
            }
        );

        $this->download(
            fn($request, $model) => $model->attachment($attachment)->download()
        );


        $this->storageCallback = function(NovaRequest $request, $model) use ($attachment) {
            $file = $request->file("$attachment.original");
            $cover = $request->file("$attachment.cover");

            if ($file) {
                $model->attachment($attachment)->attach($file, $cover);
            }
            else if ($request->isUpdateOrUpdateAttachedRequest() and $cover) {
                $model->attachment($attachment)->cover()->update($cover);
            }

            return [];
        };

        $this->deleteCallback = function(NovaRequest $request, $model) use ($attachment) {
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


    protected function fillAttribute(NovaRequest $request, $requestAttribute, $model, $attribute)
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
}
