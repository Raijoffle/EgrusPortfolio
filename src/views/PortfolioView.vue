<script setup>
import MerchWorks from "@/components/MerchView.vue";
</script>
<template>
    <main>
        <div class="title-container">
            <div class="title-bg">
                <img src="@/assets/images/sharingan.png" alt="" />
            </div>
            <h2 class="sub-title">Graphic Designer</h2>
            <h1 class="title">Specialising in Logo & Poster and Merch Design.</h1>
            <span class="title-label">Scroll down to see my work!</span>
            <router-link to="/about">Learn More</router-link>
        </div>

        <div class="my-works">
            <div class="merch-works">
                <h5>Merch</h5>

                <MerchWorks />
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 450px;
    position: relative;
    z-index: 1;

    & .title-bg {
        height: 400px;
        position: absolute;
        z-index: -1;

        & img {
            height: 100%;
            opacity: 0.35;
            animation: rotateSharingan 5s infinite;
        }
        @keyframes rotateSharingan {
            0% {
                transform: rotate(-720deg);
                filter: blur(0px);
            }

            50% {
                filter: blur(3px);
            }

            100% {
                filter: blur(0px);
                transform: rotate(720deg);
            }
        }
    }

    color: #051923;
    & .sub-title {
        font-size: 64px;
        font-weight: 900;
        line-height: 66px;
    }

    & .title {
        font-size: 28px;
        margin-top: 10px;
        line-height: 30px;
        font-weight: 500;
    }
    & .title-label {
        font-size: 16px;
        margin-top: 10px;
        font-weight: 900;
        line-height: 20px;
        color: #05192385;
    }
    & a {
        border: none;
        background-color: #003554;
        color: #fff;
        padding: 15px 20px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-decoration: none;

        &:hover {
            box-shadow: 0px 0px 20px #003554;
        }
    }
}
.my-works {
    margin-top: 120px;

    & .merch-works {
        & h5 {
            font-weight: 600;
            font-size: 48px;
            line-height: 52px;
            color: #fff;
            background-color: #051923;
            padding: 10px 0px;
            margin-bottom: 20px;
        }
    }
}
</style>
