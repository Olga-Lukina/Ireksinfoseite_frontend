<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto">
      <!--seach-->
      <div
        class="p-4 m-4 text-center text-white bg-green-600 flashMessage"
        v-if="GStore.flashMessage"
      >
        {{ GStore.flashMessage }}
      </div>
      <form
        @submit.prevent="submitted"
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
        />
        <button class="p-2 mr-2 border border-red-800 rounded-xl">
          поиск
        </button>
      </form>
      <CategoryGrid :categories="parentcategories" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import store from '@/store.js';
import CategoryGrid from '@/components/CategoryGrid.vue';
import service from '@/service.js';

export default {
  inject: ['GStore'],
  name: 'home',
  components: {
    CategoryGrid,
  },
  data() {
    return {
      categories: [],
      search: '',
      error: null,
    };
  },
  mounted() {
    this.getCategories();
    // this.search();
  },
  methods: {
    async getCategories() {
      try {
        const response = await service.getCategories();
        this.$data.categories = response.data;
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
  },
  computed: {
    parentcategories() {
      const categories = this.categories.filter(
        (category) => category.parent_id === null
      );
      return categories;
    },
  },
};
</script>
