<template>
    <div>
        <!-- VIDEO QUALITIES -->
        <template v-if="isDetails && styles.length">
            <ul class="flex overflow-x-auto text-sm font-medium text-center text-gray-500 dark:text-gray-400 pb-3">
                <li v-for="(style, index) in styles" class="mr-2" :key="index">
                    <a
                        @click="select(style, index)"
                        href="javascript:;"
                        class="inline-block whitespace-nowrap uppercase rounded-lg px-4 py-3"
                        :class="{
                            'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300': selectedStyle !== index,
                            'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500 active': selectedStyle === index
                        }"
                    >
                        {{ __(style.name) }}
                    </a>
                </li>
            </ul>

            <template v-for="(style, index) in styles">
                <div v-if="selectedStyle === index">
                    <loading-view v-if="loading" :loading="true"/>

                    <template v-else>
                        <video-player
                            v-if="videoExists"
                            :title="style.name + ' - ' + field.meta.name"
                            :src="style.url"
                            :poster="field.cover ?? ''"
                            :dir="dir"
                            :is-details="isDetails"
                        />

                        <div v-else class="flex justify-center items-center help-text p-8">
                            <Icon type="video-camera" class="mr-1"/>
                            <span>{{ __('Video Not Found') }}</span>
                        </div>
                    </template>
                </div>
            </template>
        </template>


        <!-- ORIGINAL VIDEO -->
        <video-player
            v-else
            :title="field.meta.name"
            :src="field.original"
            :poster="field.cover ?? ''"
            :dir="dir"
            :is-details="isDetails"
        />
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import VideoPlayer from './VideoPlayer.vue'
import 'vidstack/player'
import 'vidstack/player/layouts'
import 'vidstack/player/ui'


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
    isDetails: {
        type: Boolean,
        required: true
    },
    style: {
        type: String,
        default: 'original'
    }
})

const selectedStyle = ref(0)
const loading = ref(false)
const videoExists = ref(true)


// computed properties
const styles = computed(() => {
    const obj = {
        ...props.field
    }

    const styles = [
        {
            name: 'original',
            url: obj.original
        }
    ]

    delete obj.cover
    delete obj.meta
    delete obj.original

    for (const [key, value] of Object.entries(obj)) {
        if (value) {
            const isVideo = value.endsWith('mp4') || value.endsWith('webm') || value.endsWith('m3u8')

            if (isVideo) {
                styles.push({
                    name: key,
                    url: value
                })
            }
        }
    }

    return styles
})


// methods
async function select(style, index) {
    loading.value = true
    selectedStyle.value = index

    videoExists.value = await checkUrlExists(style.url)

    loading.value = false

    emit('update:style', style.name)
}

async function checkUrlExists(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD',
        });

        return response.ok || (response.status >= 300 && response.status < 400);
    }
    catch (error) {
        return false
    }
}
</script>
