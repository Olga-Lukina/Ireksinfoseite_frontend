<template>
  <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div
      class="grid grid-cols-2 gap-2 px-2 pb-4 xs:grid-cols-2 s:grid-cols-3 m:grid-cols-3 l:grid-cols-4"
    >
      <div
        class="flex flex-col w-full"
        v-for="category in categories"
        :key="category.name"
      >
        <!--Card-->
        <div
          class="flex flex-col flex-1 bg-white border border-white shadow-lg sm:flex-wrap rounded-2xl"
        >
          <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
            <div class="flex-1">
              <figure>
                <router-link :to="categorylink(category)">
                  <img
                    class="border rounded-2xl"
                    :src="`http://localhost/storage/${category.image}`"
                    :alt="category.name"
                  />
                </router-link>
              </figure>
              <router-link :to="categorylink(category)">
                <h2 class="m-2 text-sm font-medium ">{{ category.name }}</h2>
              </router-link>
            </div>
            <div class="mb-2">
              <span
                class="p-1 m-1 text-xs text-gray-400 m-b-2 numberOfProducts"
              >
                ({{
                  category.subcategory_count
                    ? category.subcategory_count
                    : category.products_count
                }})</span
              >
            </div>
          </div>
        </div>
        <!--End Card-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    categorylink(category) {
      console.log(category);
      const parentId = category.parent_id ? category.parent_id + '/' : '';
      return `/categories/${parentId}${category.slug}`;
    },
  },
};
</script>
