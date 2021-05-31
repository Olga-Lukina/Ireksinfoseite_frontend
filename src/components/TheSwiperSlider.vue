<template>
  <swiper :thumbs="{ swiper: thumbsSwiper }" ...> ... </swiper>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img :src="require(`@/assets/images/${product.image}`)"
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

  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  computed: {
    productlisting() {
      return store.productlisting.find(
        (productdetail) => productdetail.slug === this.slug
      );
    },
  },
};
</script>
