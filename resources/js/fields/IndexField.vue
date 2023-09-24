<template>
    <p>
        <FilePreview
            v-if="field.previewUrl"
            :field="field.displayedAs"
            :is-details="false"
        />

        <span v-else>&mdash;</span>
    </p>
</template>

<script>
import FilePreview from '../components/FilePreview.vue'

export default {
    props: [
        'viaResource', 'viaResourceId', 'resourceName', 'field'
    ],
    components: {
        FilePreview
    }
}
</script>
