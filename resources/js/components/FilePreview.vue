<template>
    <video-preview
        @update:style="updateStyle"
        v-if="isVideo"
        :field="field"
        :dir="dir"
        :is-details="isDetails"
        :max-height="maxHeight"
        :style="style"
    />

    <div v-else-if="isImage" class="inline-block">
        <image-preview
            @update:style="updateStyle"
            :field="field"
            :is-details="isDetails"
            :style="style"
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


const emit = defineEmits([
    'update:style'
])


// variables
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
    maxHeight: {
        type: String,
        default: 'auto'
    },
    isDetails: {
        type: Boolean,
        required: true
    },
    style: {
        type: String,
        default: 'original'
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


// methods
const updateStyle = (style) => {
    emit('update:style', style)
}
</script>
