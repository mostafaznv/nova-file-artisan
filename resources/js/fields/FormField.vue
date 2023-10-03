<template>
    <file-picker
        v-model="file"
        v-bind="$props"
        :original-attribute-name="field.attribute"
        :cover="cover"
    />

    {{  }}

    <file-picker
        v-if="(file || resourceId) && coverProps && coverProps.field.displayCoverUploader"
        v-model="cover"
        v-bind="coverProps"
        :original-attribute-name="field.attribute"
        :errors="errors"
        :is-cover="true"
    />
</template>

<script>
import FilePicker from '../components/FilePicker.vue'


export default {
    props: [
        'resourceName', 'resourceId', 'relatedResourceName',
        'relatedResourceId', 'viaRelationship', 'field', 'errors'
    ],
    components: {
        FilePicker,
    },
    data: () => ({
        file: null,
        cover: null,
        coverProps: null
    }),
    created() {
        const coverProps = JSON.parse(JSON.stringify(this.$props))
        const attribute = coverProps.field.attribute
        const coverAttribute = attribute + '_cover'


        coverProps.field.attribute = coverAttribute
        coverProps.field.indexName = coverProps.field.indexName + '(Cover)'
        coverProps.field.name = coverProps.field.indexName
        coverProps.field.sortableUriKey = coverProps.field.sortableUriKey + '_cover'
        coverProps.field.uniqueKey = coverProps.field.uniqueKey.replace(attribute, coverAttribute)
        coverProps.field.dependentComponentKey = coverProps.field.dependentComponentKey.replace(attribute, coverAttribute)
        coverProps.field.validationKey = coverProps.field.validationKey.replace('.original', '.cover')
        coverProps.field.value = coverProps.field.thumbnailUrl
        coverProps.field.previewUrl = coverProps.field.thumbnailUrl

        this.coverProps = coverProps
    }
}
</script>
