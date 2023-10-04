<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <template v-if="shouldShowFile">
                <FilePreview
                    :field="field.displayedAs"
                    :is-details="true"
                />
            </template>

            <span v-else>&mdash;</span>

            <p v-if="shouldShowToolbar" class="flex items-center text-sm mt-3">
                <LinkButton
                    v-if="field.downloadable"
                    @keydown.enter.prevent="download"
                    @click.prevent="download"
                    :dusk="field.attribute + '-download-link'"
                    tabindex="0"
                >
                    <Icon class="mr-2" type="download" width="16" height="16" />
                    <span class="class mt-1">{{ __('Download') }}</span>
                </LinkButton>
            </p>
        </template>
    </PanelItem>

    <PanelItem :index="index + '-cover'" :field="coverField">
        <template #value>
            <template v-if="coverField.displayedAs.cover && coverField.displayCoverUploader">
                <ImageLoader
                    aspect="aspect-auto"
                    :src="coverField.displayedAs.cover"
                    :maxWidth="280"
                />


                <DeleteCoverButton
                    class="mt-6"
                    :resource-id="resourceId"
                    :resource-name="resourceName"
                    :field-name="field.attribute"
                    :field="field"
                    :is-detail-page="true"
                />
            </template>

            <span v-else>&mdash;</span>
        </template>
    </PanelItem>
</template>

<script>
import FilePreview from '../components/FilePreview.vue'
import DeleteCoverButton from "../components/DeleteCoverButton.vue";


export default {
    components: {
        DeleteCoverButton,
        FilePreview
    },
    props: ['resource', 'resourceName', 'resourceId', 'field', 'index'],
    data() {
        return {
            src: this.field.previewUrl,
            autoplay: false,
        }
    },
    computed: {
        shouldShowFile() {
            return Boolean(this.field.previewUrl)
        },

        shouldShowToolbar() {
            return Boolean(this.field.downloadable && this.field.thumbnailUrl)
        },

        coverField() {
            return {
                ...this.field,
                name: this.field.name + ' (' + this.__('Cover') + ')'
            }
        }
    },
    methods: {
        download() {
            const {resourceName, resourceId} = this
            const attribute = this.field.attribute

            let link = document.createElement('a')
            link.href = `/nova-api/${resourceName}/${resourceId}/download/${attribute}`
            link.download = 'download'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    },
}
</script>

