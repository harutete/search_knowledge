<template>
    <button @click="$emit('click-event')" :type="type" class="btn-utility">
        {{ text }}
    </button>
</template>

<script lang="ts">
export default ({
    props: {
        type: {
            default: 'button',
            type: String,
            required: false
        },
        text: {
            default: '',
            type: String,
            required: true
        }
    }
})
</script>