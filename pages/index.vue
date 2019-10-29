<template>
    <div id="contents-main">
        <div class="contents-inner">
            <modeChangeButton></modeChangeButton>
            <h1 class="title-01">Knowledge Search</h1>
            <div class="contents-column contents-column--center">
                <div class="contents-column__item">
                    <input type="text" v-model="keyword" placeholder="Keyword..." class="input-utility" />
                </div>
                <div class="contents-column__item">
                    <button @click="getKnowledgeData" type="button" class="btn-utility">GET</button>
                </div>
            </div>
            <ul class="list-horizontal list-horizontal--center list-word-history">
                <li v-for="(word, index) in words" :key="`word${index}`">
                    <span class="list-word-history__item">
                        {{ word }}
                    </span>
                </li>
            </ul>
            <template v-show="!isLength">
                <div class="loading"></div>
            </template>
            <template v-show="isLength">
                <div class="card-wrap">
                    <div  v-for="(data, index) in knowledgeData"
                    :key="`data${index}`"
                    class="card-item"
                    >
                        <div class="card-item__inner">
                            <div>
                                <h2 class="card-item__title">
                                    <a :href="data.url" target="_blank">
                                        {{ data.title }}
                                        <fa :icon=faWindowRestore />
                                    </a>
                                </h2>
                            </div>
                            <div class="card-item__contents">
                                <ul class="card-item__tags">
                                    <li v-for="(tag, index) in data.tags"
                                    :key="`tag${index}`"
                                    >
                                        {{ tag.name }}
                                    </li>
                                </ul>
                                <p class="card-item__description">{{ data.body }}</p>
                                <div class="contents-column contents-column--fix">
                                    <div class="contents-column__item u-w-06">
                                        {{ data.updated_at | dateFormat }}
                                    </div>
                                    <div class="contents-column__item u-w-06 u-txt-right">
                                        <fa :icon=faThumbsUp />
                                        {{ data.likes_count }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import axios from 'axios'
    import { faWindowRestore, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
    import modeChangeButton from '~/components/modeChangeButton.vue'

    const URL = 'https://qiita.com/api/v2/items'

    export default Vue.extend ({
        components: {
            modeChangeButton
        },
        data () {
            return {
                keyword: '',
                isLength: false,
                knowledgeData: null,
                results: null
            }
        },
        computed: {
            words () {
                return this.$store.state.wordHistory.wordList
            },
            faWindowRestore () {
                return faWindowRestore
            },
            faThumbsUp () {
                return faThumbsUp
            }
        },
        methods: {
            async getKnowledgeData () {
                try {
                    let params
                    let response

                    if (this.keyword === '') {
                        return
                    }

                    params = {
                        page: 1,
                        per_page: 20,
                        query: this.keyword
                    }
                    response = await axios.get(URL, { params })

                    this.knowledgeData = response.data
                    this.isLength = true
                    this.$store.commit('wordHistory/add', params.query)
                } catch (error) {
                    console.error(error)

                    this.isLength = false
                }
            }
        }
    })
</script>

<style lang="scss">
@keyframes moveGradient {
    0% {
        background-position: 0 100%;
    }
    50% {
        background-position: 0 50%;
    }
    100% {
        background-position: 100% 0;
    }
}
#contents {
    &-main {
        display: flex;
        background: linear-gradient(-45deg, #BEE6E1, $color-lightgreen, #E3CFE2, $color-lightpurple) {
            size: 200% 200%;
        }
        animation: moveGradient 10s ease infinite alternate;
        width: 100vw;
        height: 100%;
        min-height: 100vh;
    }
}
.search {
    &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
.input {
    &-utility {
        background: transparent;
        border: 2px solid $color-white;
        color: $color-white;
        font-size: 1.6rem;
        padding: 5px;
        &::placeholder {
            color: $color-white;
        }
    }
}
.btn {
    &-utility {
        display: inline-block;
        cursor: pointer;
        background: transparent;
        border: 2px solid $color-white {
            radius: 0;
        }
        color: $color-white;
        font: {
            size: 1.6rem;
        }
        padding: 5px 10px;
    }
}
.card {
    &-wrap {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0 0 -10px;
    }
    &-item {
        padding: 10px 0 0 10px;
        @media screen and (min-width: 960px) {
            width: 25%
        }
        @media screen and (max-width: 959px) {
            width: 50%
        }
        &__inner {
            background: rgba($color-white, .6);
            border: 1px solid $color-white {
                radius: 3px;
            }
            height: 100%;
            padding: 10px;
        }
        &__title {
            background: $color-lightpurple;
            border-radius: 3px;
            padding: 5px;
            a {
                color: $color-white;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        &__description {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        &__contents {
            margin-top: 20px;
            & > * {
                margin-top: 10px;
                &:first-child {
                    margin-top: 0;
                }
            }
        }
        &__tags {
            display: flex;
            flex-wrap: wrap;
            margin-left: -5px;
            li {
                background: $color-lightgray;
                border-radius: 50px;
                margin: 5px 0 0 5px;
                padding: 2px 10px;
            }
        }
    }
}
</style>