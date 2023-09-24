<template>
    <div class="audio" :class="{small: !isDetails}">
        <audio
            :src="src"
            :class="isDetails ? 'w-full' : ''"
            controlslist="nodownload"
            controls
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
    isDetails: {
        type: Boolean,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.audio {
    position: relative;
    width: 100%;
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
