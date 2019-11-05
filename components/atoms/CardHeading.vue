<template>
    <h2 class="card-item__title">
        <a
            :href="url"
            target="_blank"
        >
            <slot></slot>
        </a>
    </h2>
</template>

<script lang="ts">
export default ({
    props: {
        url: {
            default: '',
            type: String,
            required: true
        }
    }
})
</script>