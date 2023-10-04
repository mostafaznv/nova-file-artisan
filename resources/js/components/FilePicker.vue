<template>
    <DefaultField
        :field="currentField"
        :label-for="labelFor"
        :errors="errors"
        :show-help-text="!isReadonly && showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <!-- ORIGINAL FILE -->
            <div class="space-y-4">
                <div
                    v-if="hasValue && previewFile && files.length === 0"
                    class="grid grid-cols-4 gap-x-6 gap-y-2"
                >
                    <FilePreviewBlock
                        v-if="previewFile"
                        :file="previewFile"
                        :removable="shouldShowRemoveButton"
                        @removed="confirmRemoval"
                        :rounded="field.rounded"
                        :dusk="`${field.attribute}-delete-link`"
                    />
                </div>

                <!-- Upload Removal Modal -->
                <ConfirmUploadRemovalModal
                    :show="removeModalOpen"
                    @confirm="removeUploadedFile"
                    @close="closeRemoveModal"
                />

                <!-- DropZone -->
                <DropZone
                    v-if="shouldShowField"
                    :files="files"
                    @file-changed="handleFileChange"
                    @file-removed="file = null"
                    :rounded="field.rounded"
                    :accepted-types="acceptedTypes"
                    :disabled="file?.processing"
                    :dusk="`${field.attribute}-delete-link`"
                    :input-dusk="field.attribute"
                />
            </div>
        </template>
    </DefaultField>
</template>

<script>
import {DependentFormField, HandlesValidationErrors, Errors} from 'laravel-nova'


function createFile(file) {
    return {
        name: file.name,
        extension: file.name.split('.').pop(),
        type: file.type,
        originalFile: file,
        processing: false,
        progress: 0,
    }
}

export default {
    name: 'FilePicker',
    mixins: [
        HandlesValidationErrors, DependentFormField
    ],
    emits: [
        'update:modelValue'
    ],
    props: [
        'originalAttributeName', 'resourceId', 'resourceName', 'relatedResourceName', 'relatedResourceId',
        'viaRelationship', 'field', 'cover', 'isCover', 'errors'
    ],
    inject: [
        'removeFile'
    ],
    expose: [
        'beforeRemove'
    ],
    data: () => ({
        file: null,
        previewFile: null,
        thumbnailFile: null,
        fileName: '',
        thumbnailFileName: '',
        removeModalOpen: false,
        missing: false,
        deleted: false,
        src: null,
        uploadErrors: new Errors(),
        uploading: false,
        thumbnailUploading: false,
        uploadProgress: 0,
        thumbnailUploadProgress: 0,
        startedDrag: false,
        uploadModalShown: false,
    }),
    computed: {
        acceptedTypes() {
            if (this.isCover) {
                return 'image/png, image/jpeg'
            }

            return null
        },

        files() {
            return this.file ? [this.file] : []
        },

        hasError() {
            return this.uploadErrors.has(this.fieldAttribute)
        },

        firstError() {
            if (this.hasError) {
                return this.uploadErrors.first(this.fieldAttribute)
            }
        },

        idAttr() {
            return this.labelFor
        },

        labelFor() {
            let name = this.resourceName

            if (this.relatedResourceName) {
                name += '-' + this.relatedResourceName
            }

            return `file-${name}-${this.fieldAttribute}`
        },

        hasValue() {
            return (
                Boolean(this.field.value || this.imageUrl) &&
                !Boolean(this.deleted) &&
                !Boolean(this.missing)
            )
        },

        shouldShowLoader() {
            return !Boolean(this.deleted) && Boolean(this.imageUrl)
        },

        shouldShowField() {
            return Boolean(!this.currentlyIsReadonly)
        },

        shouldShowRemoveButton() {
            return Boolean(this.currentField.deletable && !this.currentlyIsReadonly)
        },

        imageUrl() {
            return this.currentField.previewUrl || this.currentField.thumbnailUrl
        },

        maxWidth() {
            return this.currentField.maxWidth || 320
        }
    },
    watch: {
        file: {
            immediate: true,
            handler(file) {
                this.$emit('update:modelValue', file)
            }
        }
    },
    methods: {
        preparePreviewImage() {
            if (this.hasValue && this.imageUrl) {
                this.fetchPreviewImage()
            }

            if (this.hasValue && !this.imageUrl) {
                this.previewFile = createFile({
                    name: this.currentField.value,
                    type: this.currentField.value.split('.').pop(),
                })
            }
        },

        async fetchPreviewImage() {
            let response = await fetch(this.imageUrl)
            let data = await response.blob()

            const name = this.currentField.value.split('/').pop()

            this.previewFile = createFile(
                new File([data], name, { type: data.type })
            )
        },

        handleFileChange(newFiles) {
            this.file = createFile(newFiles[0])
        },

        confirmRemoval() {
            this.removeModalOpen = true
        },

        closeRemoveModal() {
            this.removeModalOpen = false
        },

        beforeRemove() {
            this.removeUploadedFile()
        },

        async removeUploadedFile() {
            //   this.uploadErrors = new Errors()
            try {
                await this.removeFile(this.fieldAttribute)
                this.$emit('file-deleted')
                this.deleted = true
                this.file = null
                Nova.success(this.__('The file was deleted!'))
            } catch (error) {
                if (error.response?.status === 422) {
                    this.uploadErrors = new Errors(error.response.data.errors)
                }
            } finally {
                this.closeRemoveModal()
            }
        },

        async removeFile() {
            this.uploadErrors = new Errors()

            const {resourceName, resourceId, relatedResourceName, relatedResourceId, viaRelationship} = this
            const attribute = this.originalAttributeName

            const uri = this.viaRelationship
                ? `/nova-api/${resourceName}/${resourceId}/${relatedResourceName}/${relatedResourceId}/field/${attribute}?viaRelationship=${viaRelationship}`
                : `/nova-api/${resourceName}/${resourceId}/field/${attribute}`

            const query = '?cover=' + (this.isCover ? 'true' : 'false')

            try {
                await Nova.request().delete(uri + query)
                this.closeRemoveModal()
                this.deleted = true
                this.$emit('file-deleted')
                Nova.success(this.__('The file was deleted!'))
            }
            catch (error) {
                this.closeRemoveModal()

                if (error.response.status === 422) {
                    this.uploadErrors = new Errors(error.response.data.errors)
                }
            }
        }
    },
    async mounted() {
        this.preparePreviewImage()

        if (!this.isCover) {
            this.field.fill = formData => {
                let attribute = this.fieldAttribute

                if (this.file) {
                    formData.append(attribute + '[original]', this.file.originalFile, this.file.name)
                }

                if (this.cover) {
                    formData.append(attribute + '[cover]', this.cover.originalFile, this.cover.name)
                }
            }
        }
    },
}
</script>
