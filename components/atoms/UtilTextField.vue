<template>
    <input :type="type" :placeholder="placeHolder" :value="value" @input="UodateValue($event.target.value)" class="input-utility">
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
        },
        value: {
            type: String
        }
    },
    methods: {
        UodateValue (value: string) {
            this.$emit('input', value)
        }
    }
})
</script>