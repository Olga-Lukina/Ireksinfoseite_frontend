<template>
  <div class="home">
    <!--link back-->
    <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
      <div class="flex items-center justify-center p-2 m-2" @click="goBack">
        <img
          class="mr-auto"
          src="@/assets/images/chevron_left.svg"
          alt="chevron_left"
        />
        <a class="mr-auto">{{ name }}</a>
      </div>
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
  props: {
    name: String,
  },
  computed: {
    categories() {
      return store.categories.filter(
        (category) => category.parentslug === this.$route.params.slug
      );
    },
  },
};
</script>
