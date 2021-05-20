<template>
  <!--Card-->
  <div
    class="grid grid-cols-2 gap-2 px-2 pb-4 xs:grid-cols-2 s:grid-cols-3 m:grid-cols-3 l:grid-cols-4"
  >
    <div
      class="flex sm:flex-wrap"
      v-for="product in products"
      :key="product.name"
    >
      <!--Card-->
      <div class="bg-white border border-white shadow-lg rounded-2xl">
        <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
          <figure>
            <router-link :to="productlink(product)">
              <img
                class="border rounded-2xl"
                :src="require(`@/assets/images/${product.image}`)"
                :alt="product.name"
              />
            </router-link>
          </figure>
          <router-link :to="productlink(product)">
            <h2 class="m-2 text-sm font-medium ">{{ product.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!--End Card-->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    productlink(product) {
      const parentSlug = product.parentslug ? product.parentslug + '/' : '';
      return `/products/${parentSlug}${product.slug}`;
    },
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
