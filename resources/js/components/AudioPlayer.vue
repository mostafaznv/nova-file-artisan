<template>
    <div class="audio" :class="{small: !isDetails}">
        <media-player @click.stop.prevent ref="player" :title="meta.name" :src="src" crossorigin>
            <media-provider></media-provider>
            <media-audio-layout></media-audio-layout>
        </media-player>
    </div>
</template>

<script setup>
import {ref, onBeforeUnmount} from 'vue'


const props = defineProps({
    src: {
        type: String,
        required: true
    },
    meta: {
        type: Object,
        required: true
    },
    isDetails: {
        type: Boolean,
        required: true
    }
})

const player = ref(null)

onBeforeUnmount(() => {
    player.value?.pause()
})
</script>

<style lang="scss" scoped>
.audio {
    position: relative;
    width: 100%;
    min-width: 300px;
    max-width: 800px;
    display: inline-block;

    &.small {
        max-width: 270px;
    }

    audio {
        width: 100%;
    }
}
</style>
