<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container">
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
import store from '@/store.js';
import CategoryGrid from '@/components/CategoryGrid.vue';

export default {
  name: 'home',
  components: {
    CategoryGrid,
  },
  computed: {
    categories() {
      return store.categories.filter((category) => category.parentslug === '');
    },
  },
};
</script>
