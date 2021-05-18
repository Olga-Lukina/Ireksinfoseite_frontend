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
      <div class="flex sm:flex-wrap" v-for="product in products" :key="product.name">
        <!--Card-->  
         
        <router-link :to='product.slug'><h2>{{product.name}}</h2></router-link>
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
    products: {
      type: Array,
      required: true
    }
  },
  
  
};
</script>
