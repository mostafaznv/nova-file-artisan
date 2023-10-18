<template>
    <div class="audio" :dir="dir" :class="{small: !isDetails}">
        <media-player @click.stop.prevent :title="meta.name" :src="src" crossorigin>
            <media-provider />
            <media-audio-layout />
        </media-player>
    </div>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    meta: {
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
</script>

<style lang="scss" scoped>
.audio {
    position: relative;
    width: 100%;
    min-width: 300px;
    display: inline-block;

    &.small {
        max-width: 270px;
    }

    audio {
        width: 100%;
    }
}
</style>
