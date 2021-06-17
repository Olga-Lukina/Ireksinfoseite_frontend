<template>
  <!--Card-->
  <div
    class="grid grid-cols-3 gap-4 px-2 pb-4 xs:grid-cols-3 s:grid-cols-4 m:grid-cols-3 l:grid-cols-4"
  >
    <div class="flex sm:flex-wrap" v-for="recipe in recipes" :key="recipe.name">
      <!--Card-->
      <div class="bg-white border border-white shadow-md rounded-2xl">
        <div v-if="!loggedIn" class="p-1">
          <figure>
            <router-link :to="recipelink(recipe)">
              <img
                class="mb-2 border rounded-2xl"
                :src="require(`@/assets/images/${recipe.image}`)"
                :alt="recipe.name"
              />
            </router-link>
          </figure>

          <router-link :to="recipelink(recipe)">
            <h2 class="text-xs font-medium text-center uppercase s:text-s ">
              {{ recipe.name }}
            </h2>
          </router-link>
          <router-link :to="recipelink(recipe)">
            <button
              name="button"
              class="w-full py-2 my-2 text-center bg-gray-100 rounded text-s text-red-850 border-1 hover:bg-gray-300 bg-green focus:outline-none"
            >
              Посмотреть
            </button>
          </router-link>
        </div>
        <div v-else><router-link to="/register"></router-link></div>
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
