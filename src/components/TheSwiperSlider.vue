<template>
  <swiper :thumbs="{ swiper: thumbsSwiper }" :pagination="true">
    <swiper-slide v-for="image of parsedImages" :key="image"
      ><img
        class="object-cover w-full mx-auto mb-4 border s:h-96 rounded-t-3xl"
        :src="`https://ireks-storage.s3.eu-west-1.amazonaws.com/${image}`"
        alt="backmischungen für backwaren"
        title="backmischungen für Brot und Feingeback"
    /></swiper-slide>
  </swiper>

  <swiper
    class="s:hidden"
    @swiper="setThumbsSwiper"
    watch-slides-visibility
    watch-slides-progress
    :breakpoints="breakpoints"
  >
    <swiper-slide
      v-for="image of parsedImages"
      :loop="true"
      :virtualIndex="image"
      :key="image"
      ><img
        class="object-cover w-full h-32 rounded-xl"
        :src="`https://ireks-storage.s3.eu-west-1.amazonaws.com/${image}`"
    /></swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Thumbs, Pagination } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Thumbs, Pagination]);

// Import Swiper styles
export default {
  data() {
    return {
      thumbsSwiper: null,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1444: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
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
  computed: {
    parsedImages() {
      const parsedimages = JSON.parse(this.images);
      console.log(this.images, parsedimages);
      return parsedimages;
    },
  },

  params: {},
};
</script>
