<template>
    <div class="loading-wrap">
        <div class="loading-spinner">
            <div class="loading-spinner__item"></div>
            <div class="loading-spinner__item"></div>
            <div class="loading-spinner__item"></div>
        </div>
    </div>
</template>

<script lang="ts">
export default ({})
</script>

<style lang="scss" scoped>
    @keyframes bound {
        33% {
            transform:translateY(10px);
        }
        66% {
            transform:translateY(-10px);
        }
        100% {
            transform:translateY(0);
        }
    }
    .loading {
        &-wrap {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &-spinner {
            display: flex;
            justify-content: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin-right: -5px;
            &__item {
                background: $color-lightpurple;
                margin-right: 5px;
                border-radius: 100%;
                width: 15px;
                height: 15px;
                &:first-child {
                    animation: bound .6s -.2s infinite ease-in-out;
                }
                &:nth-child(2) {
                    animation: bound .6s -100ms infinite ease-in-out;
                }
                &:last-child {
                    animation: bound .6s 0s infinite ease-in-out;
                }
            }
        }
    }
</style>