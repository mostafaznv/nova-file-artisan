<template>
    <VideoPlayer
        v-if="isVideo"
        :src="field.original"
        :poster="field.cover ?? ''"
        :meta="field.meta"
        :is-details="isDetails"
    />

    <div v-else-if="isImage" class="inline-block">
        <ImageLoader
            :src="field.original"
            :maxWidth="maxWidth"
            :aspect="aspect"
        />
    </div>

    <AudioPlayer
        v-else-if="isAudio"
        :src="field.original"
        :is-details="isDetails"
    />

    <span v-else-if="field.meta?.name && isDetails">
        {{ field.meta.name }}
    </span>

    <span v-else>&mdash;</span>
</template>

<script setup>
import {computed} from 'vue'
import VideoPlayer from './VideoPlayer.vue'
import AudioPlayer from './AudioPlayer.vue'


const props = defineProps({
    field: {
        type: Object,
        required: true
    },
    isDetails: {
        type: Boolean,
        required: true
    }
})


// computed properties
const isImage = computed(() => {
    return props.field.meta.type === 'IMAGE'
})

const isVideo = computed(() => {
    return props.field.meta.type === 'VIDEO'
})

const isAudio = computed(() => {
    return props.field.meta.type === 'AUDIO'
})

const maxWidth = computed(() => {
    return props.isDetails ? 220 : 64
})

const aspect = computed(() => {
    return props.isDetails ? 'aspect-auto' : 'aspect-square'
})

</script>

<style lang="scss" scoped>

</style>
