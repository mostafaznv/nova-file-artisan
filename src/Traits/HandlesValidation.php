<?php

namespace Mostafaznv\NovaLarupload\Traits;

use Laravel\Nova\Http\Requests\NovaRequest;


trait HandlesValidation
{
    /**
     * Validation rules for the cover files
     *
     * @param array $rules
     * @return \Mostafaznv\NovaLarupload\Fields\NovaLarupload|HandlesValidation
     */
    public function coverRules(array $rules): self
    {
        $this->coverRules = $rules;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function rules(...$rules): self
    {
        parent::rules($rules);

        $this->laruploadRules = $this->rules;
        $this->rules = [];

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function creationRules(...$rules): self
    {
        parent::creationRules($rules);

        $this->laruploadCreationRules = $this->creationRules;
        $this->creationRules = [];

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function updateRules(...$rules): self
    {
        parent::updateRules($rules);

        $this->laruploadUpdateRules = $this->updateRules;
        $this->updateRules = [];

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function isRequired(NovaRequest $request)
    {
        return with($this->requiredCallback, function ($callback) use ($request) {
            if ($callback === true || (is_callable($callback) && call_user_func($callback, $request))) {
                return true;
            }

            if (!empty($this->attribute) && is_null($callback)) {
                $rules = $this->laruploadRules;
                $creationRules = array_merge_recursive($this->laruploadCreationRules, $rules);
                $updateRules = array_merge_recursive($this->laruploadUpdateRules, $rules);

                if ($request->isResourceIndexRequest() || $request->isLensRequest() || $request->isActionRequest()) {
                    return in_array('required', $creationRules);
                }

                if ($request->isCreateOrAttachRequest()) {
                    return in_array('required', $creationRules);
                }

                if ($request->isUpdateOrUpdateAttachedRequest()) {
                    return in_array('required', $updateRules);
                }
            }

            return false;
        });
    }

    /**
     * @inheritDoc
     */
    public function validationKey(): string
    {
        return "$this->attribute.original";
    }

    /**
     * Custom validation for nova-larupload fields
     *
     * @param NovaRequest $request
     * @param string $attribute
     * @return void
     */
    protected function validate(NovaRequest $request, string $attribute): void
    {
        $originalAttribute = "$attribute.original";
        $coverAttribute = "$attribute.cover";

        $rules = $this->laruploadRules;


        if ($request->isCreateOrAttachRequest()) {
            $creationRules = array_merge_recursive($this->laruploadCreationRules, $rules);

            $request->validate([
                $originalAttribute => $creationRules,
                $coverAttribute    => $this->coverRules,
            ]);
        }
        else if ($request->isUpdateOrUpdateAttachedRequest()) {
            $updateRules = array_merge_recursive($this->laruploadUpdateRules, $rules);

            $request->validate([
                $originalAttribute => $updateRules,
                $coverAttribute    => $this->coverRules,
            ]);
        }
    }
}
