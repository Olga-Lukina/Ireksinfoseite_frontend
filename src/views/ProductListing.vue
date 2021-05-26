<template>
  <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div class="container">
      <!--link back-->
      <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
        <a class="flex items-center justify-center p-2 m-2" @click="goBack">
          <img
            class="mr-auto"
            src="@/assets/images/chevron_left.svg"
            alt="chevron_left"
          />
          <span class="mr-auto">{{ parentCategory.name }}</span>
        </a>
      </div>
      <ProductGrid :products="products" />
    </div>
  </div>
</template>

<script>
import store from '@/store';
import ProductGrid from '@/components/ProductGrid.vue';
export default {
  data() {
    return {};
  },
  components: {
    ProductGrid,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    products() {
      const products = store.products.filter(
        (product) => product.parentslug === this.$route.params.slug
      );
      console.log(this.$route.params.slug);
      return products;
    },
    parentCategory() {
      return store.categories.find(
        (category) => category.parentslug === this.$route.params.slug
      );
    },
  },
};
</script>
