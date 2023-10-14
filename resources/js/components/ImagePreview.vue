<template>
    <div :class="{'is-details': isDetails}">
        <!-- IMAGE STYLES -->
        <div v-if="isDetails && styles.length">
            <ul class="flex overflow-x-auto text-sm font-medium text-center text-gray-500 dark:text-gray-400 pb-3">
                <li v-for="(style, index) in styles" class="mr-2" :key="index">
                    <a
                        @click="select(style, index)"
                        href="javascript:;"
                        class="inline-block whitespace-nowrap rounded-lg px-4 py-3"
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

                    <img
                        v-else
                        :src="style.url"
                        :alt="style.name + ' - ' + field.meta.name"
                    />
                </div>
            </template>
        </div>


        <!-- ORIGINAL IMAGE -->
        <div class="image-loader">
            <image-loader
                :src="field.original"
                :maxWidth="maxWidth"
                :aspect="aspect"
            />
        </div>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'


// variables
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

const selectedStyle = ref(0)
const loading = ref(false)


// computed properties
const styles = computed(() => {
    const obj = {
        ...props.field
    }

    const styles = [
        {
            name: 'ORIGINAL',
            url: obj.original
        }
    ]

    delete obj.original
    delete obj.cover
    delete obj.stream
    delete obj.meta

    for (const [key, value] of Object.entries(obj)) {
        if (value) {
            const isImage = value.endsWith('png') || value.endsWith('jpg') || value.endsWith('jpeg') || value.endsWith('webp') || value.endsWith('gif')

            if (isImage) {
                styles.push({
                    name: key.toUpperCase(),
                    url: value
                })
            }
        }
    }

    return styles
})

const maxWidth = computed(() => {
    return props.isDetails ? 220 : 64
})

const aspect = computed(() => {
    return props.isDetails ? 'aspect-auto' : 'aspect-square'
})


// methods
async function select(style, index) {
    loading.value = true
    selectedStyle.value = index

    loading.value = false
}
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
}

.image-loader {
    ::v-deep(img) {
        object-fit: cover;
    }
}

.is-details {
    .image-loader {
        ::v-deep(img) {
            display: none;
        }
    }
}
</style>
