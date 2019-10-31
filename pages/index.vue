<template>
    <div id="contents-main">
        <div class="contents-inner">
            <UtilHeading title="Knowledge Search"></UtilHeading>
            <div class="contents-column contents-column--center">
                <div class="contents-column__item">
                    <UtilTextField v-model="keyword"
                        placeHolder="Enter Keyword"
                    >
                    </UtilTextField>
                </div>
                <div class="contents-column__item">
                    <UtilButton @click-handler="getKnowledgeData"
                        text="Get"
                    >
                    </UtilButton>
                </div>
            </div>
            <ul class="list-horizontal list-horizontal--center list-word-history">
                <li v-for="(word, index) in words" :key="`word${index}`">
                    <span @click="getPastResultData" class="list-word-history__item">
                        {{ word }}
                    </span>
                </li>
            </ul>
            <LoadingSpinner v-show="isLoading" />
            <template v-show="isLoading">
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
    import LoadingSpinner from '~/components/atoms/LoadingSpinner.vue'
    // import ModeChangeButton from '~/components/ModeChangeButton.vue'
    import UtilHeading from '~/components/atoms/UtilHeading.vue'
    import UtilTextField from '~/components/atoms/UtilTextField.vue'
    import UtilButton from '~/components/atoms/UtilButton.vue'

    const URL = 'https://qiita.com/api/v2/items'

    export default Vue.extend ({
        components: {
            LoadingSpinner,
            // ModeChangeButton,
            UtilHeading,
            UtilTextField,
            UtilButton
        },
        data () {
            return {
                keyword: '',
                isLoading: false,
                knowledgeData: null,
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
            getPastResultData (e: any): void {
                let value = e.target.innerHTML.trim()

                this.keyword = value
                this.getKnowledgeData()
            },
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

                    this.isLoading = true

                    response = await axios.get(URL, { params })

                    this.knowledgeData = response.data
                    this.$store.commit('wordHistory/add', params.query)
                    this.isLoading = false
                } catch (error) {
                    console.error(error)
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
            opacity: .8;
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