<template>
  <swiper :thumbs="{ swiper: thumbsSwiper }">
    <swiper-slide v-for="image of images" :key="image"
      ><img class="mb-4 border rounded-t-3xl" :src="`/images_slider/${image}`"
    /></swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    watch-slides-visibility
    watch-slides-progress
  >
    <swiper-slide
      v-for="image of images"
      :loop="true"
      :spaceBetween="10"
      :virtualIndex="image"
      :key="image"
      ><img class="w-1/5 mx-4 rounded-xl" :src="`/images_slider/${image}`"
    /></swiper-slide>
  </swiper>
</template>

<script>
import store from '@/store';
// import Swiper core and required modules
import SwiperCore, { Thumbs } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
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
  params: {},
};
</script>
