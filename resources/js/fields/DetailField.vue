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
</template>

<script>
import FilePreview from '../components/FilePreview.vue'

export default {
    components: {
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

