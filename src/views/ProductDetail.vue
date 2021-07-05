<template>
  <!--Slider-->
  <div v-if="product" class="container mx-auto">
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
      <li class="m-4" v-for="(sheet, index) in techsheets" :key="index">
        {{ sheet }}
      </li>
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
    <div class="h-4 mx-2 my-8 bg-gray-200"></div>
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
    <ProductGrid :products="product.recommendedItems" />
    <!--generate qr code-->
    <div class="flex p-2 m-2 mr-2 bg-white shadow rounded-2xl">
      <input
        v-model="website"
        class="w-full p-1 rounded"
        type="text"
        placeholder="type product URL"
      />
      <button
        class="p-2 text-white rounded-2xl bg-red-850 border-1 hover:bg-red-700"
        @click="generateQrCode"
        :disabled="isWebsite()"
      >
        Generate QR-Code
      </button>
    </div>
    <div v-if="generatedQrCodeUrl">
      <img :src="generatedQrCodeUrl" class="m-4 mx-auto" />
    </div>
  </div>
</template>

<script>
import TheSwiperSlider from '@/components/TheSwiperSlider.vue';
import TheReviews from '@/components/TheReviews.vue';
import TheQuestions from '@/components/TheQuestions.vue';
import RecipeGrid from '@/components/RecipeGrid.vue';
import service from '@/service.js';
import ProductGrid from '@/components/ProductGrid.vue';
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
  },
  mounted() {
    this.getProductDetail();
  },
  computed: {
    techsheets() {
      console.log(this.product.techsheets);
      return this.product.techsheets.split(', ');
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
      this.generatedQrCodeUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${this.website}!&size=300x300`;
    },
    isWebsite() {
      /* eslint-disable-next-line */
      const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g;
      return this.website.match(regex) === null;
    },
  },
};
</script>

<style></style>
