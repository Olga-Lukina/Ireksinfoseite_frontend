<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto" style="min-height: 80vh">
      <!--seach-->
      <form
        @submit.prevent="searchProducts"
        class="flex p-2 m-2 mr-2 bg-white shadow rounded-2xl"
      >
        <span class="flex items-center justify-end w-auto p-1 text-gray-500">
          <img src="@/assets/images/search.svg" alt="seach" />
        </span>
        <input
          v-model="search"
          class="w-full p-1 rounded"
          type="text"
          placeholder="Поиск по сайту"
          ref="search_input"
          autofocus
        />
      </form>
      <ProductGrid :products="searchResults" />
    </div>
  </div>
</template>

<script>
import service from '@/service.js';
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  components: {
    ProductGrid,
  },
  data() {
    return {
      search: '',
      searchResults: [],
      error: null,
    };
  },
  mounted() {
    this.$refs.search_input.focus();
  },
  updated() {
    console.log(this.GStore);
  },
  methods: {
    async searchProducts() {
      try {
        const response = await service.search(this.search);
        this.searchResults = response.data;
        this.$router.push({ name: 'Search' });
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
