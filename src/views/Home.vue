<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto">
      <!--seach-->
      <div class="flex p-2 m-2 mr-2 bg-white shadow rounded-2xl ">
        <span class="flex items-center justify-end w-auto p-1 text-gray-500">
          <img src="@/assets/images/search.svg" alt="seach" />
        </span>
        <input
          class="w-full p-1 rounded"
          type="text"
          placeholder="Поиск по сайту"
        />
      </div>
      <CategoryGrid :categories="categories" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import store from '@/store.js';
import CategoryGrid from '@/components/CategoryGrid.vue';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    CategoryGrid,
  },
  data() {
    return {
      categories: [],
      error: null,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get('http://localhost/api/categories');
        this.$data.categories = response.data;
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
