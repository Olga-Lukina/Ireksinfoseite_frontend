<template>
  <!--Slider-->
  <div v-if="product" class="container mx-auto xl:container xl:px-60">
    <div class="relative">
      <TheSwiperSlider :images="product.images" />
      <a
        class="absolute top-0 left-0 z-10 flex items-center justify-center w-full p-4 mx-auto bg-white bg-opacity-50 border rounded-t-3xl"
        @click="goBack"
      >
        <img
          class="mr-auto"
          src="@/assets/images/chevron_left.svg"
          alt="chevron_left"
        />
        <span class="mr-auto">{{ product.name }}</span>
      </a>
    </div>
    <!--title and desctiption for productname-->
    <h1 class="m-4 text-xl font-extrabold uppercase ">{{ product.name }}</h1>
    <p class="m-4">Сухая смесь для приготовления заварного полуфабриката.</p>
    <!-- stars rating -->
    <div class="flex items-center justify-between m-4">
      <StarRating :rating="product.avgRating" />
      <p>{{ roundedRating }}/{{ product.reviews.length }}</p>
    </div>
    <!--Recepies-->
    <h2 class="m-4 font-extrabold uppercase text-red-850">
      Product recipes:
    </h2>
    <RecipeGrid :recipes="product.recipes" />
    <!--Techsheets accordion-->
    <div
      @click="toggle"
      class="flex justify-between m-2 bg-white border border-white shadow-md accordion"
    >
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Techsheets:
      </h2>
      <img
        class="m-4 transform -rotate-90"
        src="@/assets/images/chevron_left.svg"
        alt="chevron_left"
      />
    </div>
    <ul v-show="showcontent" class="content">
      <li class="m-4" v-for="(sheet, index) in techsheets" :key="index">
        {{ sheet }}
      </li>
    </ul>
    <!--Marketing-->
    <div v-if="product">
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Marketing projects:
      </h2>
      <TheMarketingSlider :marketing="product.marketing" />
    </div>
    <TheReviews
      @review-submitted="addReview"
      :productslug="product.slug"
      :reviews="product.reviews"
    />
    <div class="h-4 mx-2 my-8 bg-gray-200"></div>
    <TheQuestions
      @question-submitted="addQuestion"
      :productslug="product.slug"
      :questions="product.questions"
    />
    <!--can be intresting-->
    <div>
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Can be intresting:
      </h2>
    </div>
    <ProductGrid :products="product.recommendedItems" />
    <!--generate qr code-->
    <div>
      <div v-if="generatedQrCodeUrl && loggedIn && isAdmin">
        <img :src="generatedQrCodeUrl" class="m-4 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import TheSwiperSlider from '@/components/TheSwiperSlider.vue';
import TheMarketingSlider from '@/components/TheMarketingSlider.vue';
import TheReviews from '@/components/TheReviews.vue';
import TheQuestions from '@/components/TheQuestions.vue';
import RecipeGrid from '@/components/RecipeGrid.vue';
import StarRating from '@/components/StarRating.vue';
import service from '@/service.js';
import ProductGrid from '@/components/ProductGrid.vue';
import { authComputed } from '../helpers.js';
export default {
  props: ['id'],
  data() {
    return {
      product: null,
      showcontent: false,
      error: null,
      website: '',
      generatedQrCodeUrl: '',
    };
  },
  components: {
    RecipeGrid,
    TheSwiperSlider,
    TheReviews,
    TheQuestions,
    ProductGrid,
    TheMarketingSlider,
    StarRating,
  },
  mounted() {
    this.getProductDetail();
    this.generateQrCode();
  },
  computed: {
    techsheets() {
      return this.product.techsheets.split(', ');
    },
    ...authComputed,
    roundedRating() {
      return parseFloat(this.product.avgRating).toFixed(2);
    },
  },
  methods: {
    toggle() {
      this.showcontent = !this.showcontent;
    },
    async getProductDetail() {
      try {
        const response = await service.getProductDetail(
          this.$route.params.slug
        );
        console.log(response.data);
        this.product = response.data;
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },

    goBack() {
      this.$router.go(-1);
    },

    async addReview(review) {
      review.product_id = this.product.id;
      try {
        const response = await service.addReviews(review);
        this.getProductDetail();
        this.$router.push('/review/' + this.product.slug);
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
    async addQuestion(question) {
      question.product_id = this.product.id;
      try {
        const response = await service.addQuestions(question);
        this.getProductDetail();
        this.$router.push('/question/' + this.product.slug);
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
    generateQrCode() {
      this.generatedQrCodeUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${window.location.href}!&size=300x300`;
    },
  },
};
</script>

<style></style>
