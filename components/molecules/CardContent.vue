<template>
    <div class="card-wrap">
        <div
            v-for="(item, index) in data"
            :key="`data${index}`"
            class="card-item"
        >
            <div class="card-item__inner">
                <div>
                    <CardHeading
                        :href="item.url"
                    >
                        {{ item.title }}
                        <fa :icon=faWindowRestore />
                    </CardHeading>
                </div>
                <div class="card-item__contents">
                    <ul class="card-item__tags">
                        <li
                            v-for="(tag, index) in item.tags"
                            :key="`tag${index}`"
                        >
                            {{ tag.name }}
                        </li>
                    </ul>
                    <p class="card-item__description">{{ item.body }}</p>
                    <div class="contents-column contents-column--fix">
                        <div class="contents-column__item u-w-06">
                            {{ $dateFormat(item.updated_at, 'YYYY.MM.DD (DD)') }}
                        </div>
                        <div class="contents-column__item u-w-06 u-txt-right">
                            <fa :icon=faThumbsUp />
                            {{ item.likes_count }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { faWindowRestore, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import CardHeading from '~/components/atoms/CardHeading.vue'

export default ({
    components: {
        CardHeading
    },
    props: {
        data: {
            default: [],
            type: Array,
            required: false
        },
    },
    computed: {
        faWindowRestore (): any {
            return faWindowRestore
        },
        faThumbsUp (): any {
            return faThumbsUp
        },
    },
})
</script>