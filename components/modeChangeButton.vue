<template>
    <ul>
        <li class="btn-change"><span class="btn-change__dreamy"><fa :icon="faMoon" /></span></li>
        <li class="btn-change"><span class="btn-change__eldest-son"><fa :icon="faSun" /></span></li>
    </ul>
</template>

<script lang="ts">
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default ({
    data () {
        return {
            title: 'hoge!'
        }
    },
    computed: {
        faMoon () {
            return faMoon
        },
        faSun () {
            return faSun
        }
    }
})
</script>