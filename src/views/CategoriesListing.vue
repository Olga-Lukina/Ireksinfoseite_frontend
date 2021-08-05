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
          parentCategory?.name
        }}</span>
      </a>
      <CategoryGrid :categories="subcategories" />
    </div>
  </div>
</template>
<script>
import service from '@/service.js';
import CategoryGrid from '@/components/CategoryGrid.vue';
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
        const response = await service.getCategories();
        this.categories = response.data;
        console.log('micado', JSON.stringify(this.categories));
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
  computed: {
    subcategories() {
      const categories = this.categories.filter(
        (category) => category.parent_id === this.parentCategory.id
      );
      console.log(this.$route.params.slug);
      return categories;
    },
    parentCategory() {
      return this.categories.find(
        (category) => category.slug === this.$route.params.slug
      );
    },
  },
};
</script>
