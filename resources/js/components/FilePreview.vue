<template>
    <video-preview
        v-if="isVideo"
        :field="field"
        :dir="dir"
        :is-details="isDetails"
    />

    <div v-else-if="isImage" class="inline-block">
        <image-preview
            :field="field"
            :is-details="isDetails"
        />
    </div>

    <audio-player
        v-else-if="isAudio"
        :src="field.original"
        :meta="field.meta"
        :dir="dir"
        :is-details="isDetails"
    />

    <span v-else-if="field.meta?.name && isDetails">
        {{ field.meta.name }}
    </span>

    <span v-else>&mdash;</span>
</template>

<script setup>
import {computed} from 'vue'
import VideoPreview from './VideoPreview.vue'
import AudioPlayer from './AudioPlayer.vue'
import ImagePreview from "./ImagePreview.vue";


const props = defineProps({
    field: {
        type: Object,
        required: true
    },
    dir: {
        type: String,
        default: 'ltr',
        validator(value) {
            return ['ltr', 'rtl', 'auto'].includes(value)
        }
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
</script>
