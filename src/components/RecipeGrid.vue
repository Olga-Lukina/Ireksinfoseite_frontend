<template>
  <!--Card-->
  <div
    class="grid grid-cols-2 gap-2 px-2 pb-4 xs:grid-cols-2 s:grid-cols-3 m:grid-cols-3 l:grid-cols-4"
  >
    <div class="flex sm:flex-wrap" v-for="recipe in recipes" :key="recipe.name">
      <!--Card-->
      <div class="bg-white border border-white shadow-lg rounded-2xl">
        <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
          <figure>
            <router-link :to="recipelink(recipe)">
              <img
                class="border rounded-2xl"
                :src="require(`@/assets/images/${recipe.image}`)"
                :alt="recipe.name"
              />
            </router-link>
          </figure>

          <router-link :to="recipelink(recipe)">
            <h2 class="m-2 text-sm font-medium ">{{ recipe.name }}</h2>
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
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    recipelink(recipe) {
      const parentSlug = recipe.parentslug ? recipe.parentslug + '/' : '';
      return `/recipes/${parentSlug}${recipe.slug}`;
    },
  },
};
</script>
