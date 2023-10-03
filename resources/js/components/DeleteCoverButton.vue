<template>
    <DangerButton @click="showModal = true" type="button">
        {{ __('Delete Cover') }}
    </DangerButton>

    <Modal
        data-testid="delete-resource-modal"
        :show="showModal"
        role="alertdialog"
        size="sm"
    >
        <form
            @submit.prevent="deleteCover"
            class="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
            <slot>
                <ModalHeader v-text="__(`Delete Cover`)"/>

                <ModalContent>
                    <p class="leading-normal">
                        {{ __('Are you sure you want to delete the selected cover?') }}
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
import {defineProps, ref} from 'vue'
import {useLocalization} from 'laravel-nova'


const props = defineProps({
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

const { __ } = useLocalization()

const showModal = ref(false)
const deleting = ref(false)


async function deleteCover() {
    const url = `/nova-api/${props.resourceName}/${props.resourceId}/field/${props.fieldName}`
    const params = '?cover=true'

    deleting.value = true

    return await Nova.request()
        .delete(url + params)
        .then(() => {
            Nova.success(
                __('The cover has been deleted!')
            )

            Nova.visit(`/resources/${props.resourceName}/${props.resourceId}/edit`)
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
