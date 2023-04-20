<template>
    <Carousel :itemsToShow="2.95" :wrapAround="true" :transition="300" :autoplay="2000">
        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
                <!-- {{ slide }} -->
                <img src="https://cdn.webtekno.com/media/cache/content_detail_v2/article/127114/resim-cizme-ipuclari-1661167588.jpg" alt="" />
            </div>
        </Slide>
        <Pagination />
        ...
    </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "MerchSlidersView",
    components: {
        Carousel,
        Slide,
        Pagination,
    },
});
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

.carousel__item img {
    width: 100%;
}
</style>
