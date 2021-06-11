<template>
  <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <!--link back-->
    <div class="container mx-auto">
      <a class="flex items-center justify-center p-2 m-2" @click="goBack">
        <img
          class="mr-auto s:mr-4"
          src="@/assets/images/chevron_left.svg"
          alt="chevron_left"
        />
        <span class="mr-auto text-center s:mr-4">{{
          parentCategory.name
        }}</span>
      </a>
      <CategoryGrid :categories="categories" />
    </div>
  </div>
</template>
<script>
import store from '@/store';
import CategoryGrid from '@/components/CategoryGrid.vue';
export default {
  data() {
    return {};
  },
  components: {
    CategoryGrid,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },

  computed: {
    categories() {
      const categories = store.categories.filter(
        (category) => category.parentslug === this.$route.params.slug
      );
      console.log(this.$route.params.slug);
      return categories;
    },
    parentCategory() {
      return store.categories.find(
        (category) => category.slug === this.$route.params.slug
      );
    },
  },
};
</script>
