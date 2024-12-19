<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <template v-if="shouldShowFile">
                <FilePreview
                    v-model:style="style"
                    :field="field.displayedAs"
                    :dir="field.playerDirection"
                    :is-details="true"
                />
            </template>

            <span v-else>&mdash;</span>

            <div class="flex items-center text-sm mt-3 gap-6">
                <p v-if="shouldShowToolbar" class="flex items-center">
                    <Button
                        variant="ghost"
                        @keydown.enter.prevent="download(null)"
                        @click.prevent="download(null)"
                        :disabled="style === 'stream'"
                        tabindex="0"
                    >
                        <Icon name="arrow-down-tray" type="mini" class="mr-2" />
                        <span class="class mt-1">{{ __('Download') }}</span>
                    </Button>
                </p>

                <!--<DeleteButton
                    v-if="shouldShowFile"
                    mode="file"
                    :resource-id="resourceId"
                    :resource-name="resourceName"
                    :field-name="field.attribute"
                    :field="field"
                />-->
            </div>
        </template>
    </PanelItem>

    <PanelItem v-if="field.showCoverOnDetail" :index="index + '-cover'" :field="coverField">
        <template #value>
            <template v-if="coverField.displayedAs.cover">
                <ImageLoader
                    aspect="aspect-auto"
                    :src="coverField.displayedAs.cover"
                    :maxWidth="280"
                />

                <div v-if="field.downloadable" class="flex items-center text-sm mt-3 gap-6">
                    <p class="flex items-center">
                        <Button
                            variant="ghost"
                            @keydown.enter.prevent="download('cover')"
                            @click.prevent="download('cover')"
                            tabindex="1"
                        >
                            <Icon name="arrow-down-tray" type="mini" class="mr-2" />
                            <span class="class mt-1">{{ __('Download') }}</span>
                        </Button>
                    </p>
                </div>

                <!--<DeleteButton
                    class="mt-6"
                    mode="cover"
                    :resource-id="resourceId"
                    :resource-name="resourceName"
                    :field-name="field.attribute"
                    :field="field"
                />-->
            </template>

            <span v-else>&mdash;</span>
        </template>
    </PanelItem>
</template>

<script>
import FilePreview from '../components/FilePreview.vue'
import {Button, Icon} from 'laravel-nova-ui'
//import DeleteButton from '../components/DeleteButton.vue'


export default {
    components: {
        Button,
        Icon,
        //DeleteButton,
        FilePreview
    },
    props: ['resource', 'resourceName', 'resourceId', 'field', 'index'],
    data() {
        return {
            src: this.field.previewUrl,
            autoplay: false,
            style: 'original'
        }
    },
    computed: {
        shouldShowFile() {
            return Boolean(this.field.previewUrl)
        },

        shouldShowToolbar() {
            return Boolean(this.field.downloadable && this.field.displayedAs.original)
        },

        coverField() {
            return {
                ...this.field,
                name: this.field.name + ' (' + this.__('Cover') + ')'
            }
        }
    },
    methods: {
        download(s = null) {
            const {resourceName, resourceId} = this
            const style = s ?? this.style
            const attribute = this.field.attribute

            let link = document.createElement('a')
            link.href = `/nova-api/${resourceName}/${resourceId}/download/${attribute}?style=${style}`
            link.download = 'download'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    },
}
</script>

