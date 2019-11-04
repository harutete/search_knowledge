<template>
    <span @click="clickEvent" class="list-word-history__item">
        {{ text }}
    </span>
</template>

<script lang="ts">
export default ({
    props: {
        text: {
            default: '',
            type: String,
            required: true
        }
    },
    methods: {
        clickEvent (elem: any): void {
            this.$emit('clickHandler', elem.target)
        }
    }
})
</script>