<template>
  <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div class="container">
     <!--seach--> 
    <div class="flex p-2 m-2 mr-2 bg-white shadow rounded-2xl ">
            <span class="flex items-center justify-end w-auto p-1 text-gray-500">
                <img src="@/assets/images/search.svg" alt="seach">
            </span>
            <input class="w-full p-1 rounded" type="text" placeholder="Поиск по сайту">
        </div>
    <div class="grid grid-cols-2 gap-2 px-2 pb-4 xs:grid-cols-2 s:grid-cols-3 m:grid-cols-3 l:grid-cols-4">
      <div class="flex sm:flex-wrap" v-for="category in categories" :key="category.name">
        <!--Card-->  
        <div class="bg-white border border-white shadow-lg rounded-2xl">
          <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
      <figure>
          <router-link
          :to='categorylink(category)'
          >
            <img class="border rounded-2xl"
              :src="require(`@/assets/images/${category.image}`)"
              :alt="category.name"
            />
          </router-link>
        </figure>
            <router-link
           :to='categorylink(category)'
        >
          <h2 class="m-2 text-sm font-medium ">{{ category.name }}</h2>
        </router-link>
          <div class="mb-2">
            <span class="p-1 m-1 text-xs text-gray-400 m-b-2 numberOfProducts"> ({{ category.numberOfProducts }})</span>
            </div>
          </div> 
        </div>
        <!--End Card-->
       </div> 
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
      required: true
    }
  },
  methods: {
    categorylink(category) {
      const parentSlug = category.parentslug ? category.parentslug + '/' : "";
      return `/categories/${parentSlug}${category.slug}`;
    }
  }
  
};
</script>
