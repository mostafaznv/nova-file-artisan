<template>
    <div class="video" :dir="dir" :class="{small: !isDetails}">
        <media-player
            @click.stop.prevent
            class="media-player"
            :title="title"
            :src="src"
            crossorigin
        >
            <media-poster v-if="poster" class="vds-poster" :src="poster" :alt="title" />
            <media-provider/>
            <media-video-layout/>
        </media-player>
    </div>
</template>

<script setup>
import 'vidstack/player'
import 'vidstack/player/layouts'
import 'vidstack/player/ui'


// variables
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        default: ''
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
</script>

<style lang="scss" scoped>
.video {
    position: relative;
    width: 100%;
    min-width: 300px;
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
