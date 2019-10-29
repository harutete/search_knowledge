<template>
    <h1 class="title-01">
        {{ title }}
    </h1>
</template>

<script lang="ts">
export default ({
    props: {
        title: {
            type: String,
            required: true
        }
    }
})
</script>