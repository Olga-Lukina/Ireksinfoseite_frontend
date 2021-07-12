<template>
  <swiper :pagination="true">
    <swiper-slide
      v-for="marketingimage of parsedMarketingImages"
      :key="marketingimage"
      ><img
        class="object-cover w-full mx-auto mb-4 border s:h-96 rounded-t-3xl"
        :src="`http://localhost/storage/${marketing}`"
    /></swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    watch-slides-visibility
    watch-slides-progress
  >
  </swiper>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Pagination]);

// Import Swiper styles
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    marketing: {
      type: Array,
      required: true,
    },
  },

  methods: {},
  computed: {
    parsedMarketingImages() {
      const parsemarketingdimages = JSON.parse(this.marketing);
      console.log(this.marketing, parsemarketingdimages);
      return parsemarketingdimages;
    },
  },

  params: {},
};
</script>
