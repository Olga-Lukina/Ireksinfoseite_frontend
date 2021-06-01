<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="w-full" v-for="image in images" :key="image.src">
      <img src="https://picsum.photos/seed/slide1/600/300"
    /></swiper-slide>
  </swiper>
</template>
<script>
import store from '@/store';
// import Swiper core and required modules
import SwiperCore, { Thumbs } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// install Swiper modules
SwiperCore.use([Thumbs]);

// Import Swiper styles
export default {
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>
