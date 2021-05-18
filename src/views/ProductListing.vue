<template>
    <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <ProductGrid :products='products' />
</div>
</template>

<script>
    import store from "@/store";
    import ProductGrid from '@/components/ProductGrid.vue'
export default {
  data() {
    return {};
  },
  components: {
  ProductGrid
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    products() {
      return store.products.filter(
        product => product.categoryslug === this.$route.params.subcategoriesSlug
      );
    }
  }
};
</script>

