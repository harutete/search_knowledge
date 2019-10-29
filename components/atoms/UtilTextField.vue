<template>
    <input :type="type" :placeholder="placeHolder" class="input-utility">
</template>

<script lang="ts">
export default ({
    props: {
        type: {
            default: 'text',
            type: String,
            required: false
        },
        placeHolder: {
            default: '',
            type: String,
            required: false
        }
    }
})
</script>