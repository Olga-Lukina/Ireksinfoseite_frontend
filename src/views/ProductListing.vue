<template>
  <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div class="container mx-auto" style="min-height: 80vh">
      <!--link back-->
      <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
        <a class="flex items-center justify-center p-2 m-2" @click="goBack">
          <img
            class="mr-auto s:mr-4"
            src="@/assets/images/chevron_left.svg"
            alt="chevron_left"
          />
          <span class="mr-auto s:mr-4">{{ parentCategory?.name }}</span>
        </a>
      </div>
      <ProductGrid :products="products" />
    </div>
  </div>
</template>

<script>
import store from '@/store';
import ProductGrid from '@/components/ProductGrid.vue';
import service from '@/service.js';
export default {
  data() {
    return {
      products: [],
      parentCategory: {},
      error: null,
    };
  },
  components: {
    ProductGrid,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await service.getProductsInCategory(
          this.$route.params.subcategoriesSlug
        );
        console.log(response);
        this.products = response.data.products;
        this.parentCategory = response.data.category;
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
  },
};
</script>
