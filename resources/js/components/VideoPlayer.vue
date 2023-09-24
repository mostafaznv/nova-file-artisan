<template>
    <div class="video" :class="{small: !isDetails}">
        <video
            controlslist="nodownload"
            :src="src"
            :autoplay="false"
            :controls="true"
            :playsinline="true"
        />
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

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

</script>

<style lang="scss" scoped>
.video {
    position: relative;
    width: 100%;
    max-width: 800px;
    display: inline-block;

    &.small {
        max-width: 270px;
    }
}
</style>
