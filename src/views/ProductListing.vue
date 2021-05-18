<template>
    <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div class="container">
     <!--title for subcategory--> 
   <h3> {{ productlisting.name }}</h3>
    <div class="grid grid-cols-2 gap-2 px-2 pb-4 xs:grid-cols-2 s:grid-cols-3 m:grid-cols-3 l:grid-cols-4">
      <div class="flex sm:flex-wrap" v-for="productlisting in productlisting" :key="productlisting.name">
        <!--Card-->  
        <div class="bg-white border border-white shadow-lg rounded-2xl">
          <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
      <figure>
          <router-link
            :to="{
              name: 'ProductDetail',
              params: { slug: productlisting.slug }
            }"
          >
            <img class="border rounded-2xl"
              :src="require(`@/assets/images/${productlisting.image}`)"
              :alt="productlisting.name"
            />
          </router-link>
        </figure>
            <router-link
          :to="{
            name: 'ProductDetail',
            params: { slug: productlisting.slug }
          }"
        >
          <h2 class="m-2 text-sm font-medium ">{{ productlisting.name }}</h2>
        </router-link>
          </div> 
        </div>
        <!--End Card-->
       </div> 
      </div> 
    </div>
</div>
</template>

<script>
    import store from "@/store";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    subcategories() {
      return store.subcategories.find(
        subcategories => subcategories.slug === this.slug
      );
    }
  }
};
</script>

