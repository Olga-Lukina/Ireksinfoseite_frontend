<template>
  <!--Slider-->
  <div class="container mx-auto m:max-w-s">
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
    <RecipeGrid :recipes="recipes" />
    <!--TU-->
    <div
      class="flex justify-between m-2 bg-white border border-white shadow-md"
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
    <TheReviews @review-submitted="addReview" />
    <TheQuestions />
    <!--can be intresting-->
    <div>
      <h2 class="m-4 font-extrabold uppercase text-red-850">
        Вас так же может заинтересовать:
      </h2>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import TheSwiperSlider from '@/components/TheSwiperSlider.vue';
import TheReviews from '@/components/TheReviews.vue';
import TheQuestions from '@/components/TheQuestions.vue';
import RecipeGrid from '@/components/RecipeGrid.vue';
export default {
  data() {
    return {
      reviews: [],
    };
  },
  components: {
    RecipeGrid,
    TheSwiperSlider,
    TheReviews,
    TheQuestions,
  },
  computed: {
    product() {
      const product = store.products.find(
        (product) => product.slug === this.$route.params.productSlug
      );
      console.log(product);
      return product;
    },
    recipes() {
      const recipes = store.recipes.filter(
        (recipe) => recipe.productslug === this.$route.params.productSlug
      );
      console.log(recipes);
      return recipes;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
};
</script>

<style></style>
