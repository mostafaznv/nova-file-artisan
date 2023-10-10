<template>
    <div
        @click="showModal = true" v-bind="$attrs"
        class="cursor-pointer text-red-500 inline-flex items-center"
    >
        <Icon
            class="mr-2"
            type="trash"
            view-box="0 0 24 24"
            width="16"
            height="16"
        />

        <span class="class mt-1">
            {{ label }}
        </span>
    </div>

    <Modal
        data-testid="delete-resource-modal"
        :show="showModal"
        role="alertdialog"
        size="sm"
    >
        <form
            @submit.prevent="remove"
            class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
            <slot>
                <ModalHeader v-text="label"/>

                <ModalContent>
                    <p class="leading-normal">
                        {{ __(`Are you sure you want to delete the selected ${mode}?`) }}
                    </p>
                </ModalContent>
            </slot>

            <ModalFooter>
                <div class="ml-auto">
                    <LinkButton
                        type="button"
                        data-testid="cancel-button"
                        dusk="cancel-delete-button"
                        @click.prevent="showModal = false"
                        class="mr-3"
                    >
                        {{ __('Cancel') }}
                    </LinkButton>

                    <LoadingButton
                        ref="confirmButton"
                        dusk="confirm-delete-button"
                        :processing="deleting"
                        :disabled="deleting"
                        component="DangerButton"
                        type="submit"
                    >
                        {{ __('Delete') }}
                    </LoadingButton>
                </div>
            </ModalFooter>
        </form>
    </Modal>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useLocalization} from 'laravel-nova'


const props = defineProps({
    mode: {
        type: String,
        required: true,
        validator(value) {
            return ['file', 'cover'].includes(value)
        }
    },
    resourceName: {
        type: String,
        required: true
    },
    resourceId: {
        type: Number,
        required: true
    },
    fieldName: {
        type: String,
        required: true
    }
})



// composables
const { __ } = useLocalization()


// variables
const showModal = ref(false)
const deleting = ref(false)


// computed properties
const label = computed(() => {
    if (props.mode === 'file') {
        return __('Delete File')
    }

    return __('Delete Cover')
})


async function remove() {
    const url = `/nova-api/${props.resourceName}/${props.resourceId}/field/${props.fieldName}`
    const params = props.mode === 'cover' ? '?cover=true' : ''

    deleting.value = true

    return await Nova.request()
        .delete(url + params)
        .then(() => {
            Nova.success(
                __(`The ${props.mode} has been deleted!`)
            )

            Nova.visit(`/resources/${props.resourceName}/${props.resourceId}`)
        })
        .catch(error => {
            Nova.error(error)
        })
        .finally(() => {
            deleting.value = false
            showModal.value = false
        })
}
</script>
