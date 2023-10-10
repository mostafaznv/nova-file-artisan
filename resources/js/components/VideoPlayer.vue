<template>
    <div class="video" :class="{small: !isDetails}">
        <media-player @click.stop.prevent ref="player" class="media-player" :title="meta.name" :src="src" crossorigin>
            <media-poster
                v-if="poster"
                class="vds-poster"
                :src="poster"
                :alt="meta.name"
            />

            <media-provider></media-provider>
            <media-video-layout></media-video-layout>
        </media-player>
    </div>
</template>

<script setup>
import {onBeforeUnmount, ref} from 'vue'
import 'vidstack/player'
import 'vidstack/player/layouts'
import 'vidstack/player/ui'


const props = defineProps({
    src: {
        type: String,
        required: true
    },
    poster: {
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
.video {
    position: relative;
    width: 100%;
    min-width: 300px;
    max-width: 800px;
    display: inline-block;


    &.small {
        max-width: 270px;
    }

    ::v-deep(.vds-poster) {
        img {
            object-fit: cover;
        }
    }
}
</style>
