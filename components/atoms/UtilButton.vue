<template>
    <button @click="clickEvent" :type="type" class="btn-utility">
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
    },
    methods: {
        clickEvent (): void {
            this.$emit('click-handler')
        }
    }
})
</script>