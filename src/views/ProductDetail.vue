<template>
     <div class="bg-gray-200 border-2 border-gray-200 rounded-t-3xl">
    <div class="container">
     <!--title for subcategory--> 
   <h3> {{ productdetail.name }}</h3>
        <!--Card-->  
        <div class="bg-white border border-white shadow-lg rounded-2xl">
          <div class="p-4 px-1 py-1 sm:w-1/2 lg:w-1/3 sm:py-1">
           <!--Slider--> 
           
                <h1> {{ productdetail.name }}</h1>
                <p>{{ productdetail.description }}</p>
          </div> 
        </div>
        <!--End Card-->      
    </div>
</div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    productdetailSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    productlisting() {
      return store.productlisting.find(
        productdetail => productdetail.slug === this.slug
      );
    },
  },
};
</script>

<style>

</style>

