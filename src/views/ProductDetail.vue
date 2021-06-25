<template>
  <!--Slider-->
  <div v-if="product" class="container mx-auto m:max-w-s">
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
      <div class="flex items-center justify-start ">
        <div
          v-for="index in 5"
          :key="index"
          class="flex items-center mt-2 mb-4"
        >
          <button>
            <svg
              class="w-8 h-8 mx-1 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p>5/5</p>
    </div>
    <!--Recepies-->
    <h2 class="m-4 font-extrabold uppercase text-red-850">
      Рецеатуры использования:
    </h2>
    <RecipeGrid :recipes="product.recipes" />
    <!--TU accordion-->
    <div
      @click="toggle"
      class="flex justify-between m-2 bg-white border border-white shadow-md accordion"
    >
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Разработанные ТУ:
      </h2>
      <img
        class="m-4 transform -rotate-90"
        src="@/assets/images/chevron_left.svg"
        alt="chevron_left"
      />
    </div>
    <ul v-show="showcontent" class="content">
      <li v-for="(showcontent, index) in showcontents" :key="index"></li>
      <li class="m-4">технические условия 1</li>
      <li class="m-4">технические условия 1</li>
    </ul>
    <!--Videorecepies-->
    <div>
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Видеорецепты:
      </h2>
    </div>
    <!--Marketing-->
    <div>
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Проекты маркетинговой поддержки:
      </h2>
    </div>
    <TheReviews
      @review-submitted="addReview"
      :productslug="product.slug"
      :reviews="product.reviews"
    />
    <TheQuestions
      @question-submitted="addQuestion"
      :productslug="product.slug"
      :questions="product.questions"
    />
    <!--can be intresting-->
    <div>
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Вас так же может заинтересовать:
      </h2>
    </div>
  </div>
</template>

<script>
import TheSwiperSlider from '@/components/TheSwiperSlider.vue';
import TheReviews from '@/components/TheReviews.vue';
import TheQuestions from '@/components/TheQuestions.vue';
import RecipeGrid from '@/components/RecipeGrid.vue';
import service from '@/service.js';
export default {
  props: ['id'],
  data() {
    return {
      product: null,
      showcontent: false,
    };
  },
  components: {
    RecipeGrid,
    TheSwiperSlider,
    TheReviews,
    TheQuestions,
  },
  mounted() {
    this.getProductDetail();
  },
  computed: {},
  methods: {
    toggle() {
      this.showcontent = !this.showcontent;
    },
    async getProductDetail() {
      try {
        const response = await service.getProductDetail(
          this.$route.params.slug
        );
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
  },
};
</script>

<style></style>
