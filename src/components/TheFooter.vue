<template>
    <footer>
  <div class="flex items-center justify-between px-4 py-2 border-t border-b border-red-800 s:justify-center s:space-x-16">
  <router-link to="/"><img class="h-12" src="@/assets/images/logos.svg" alt="ireks-logo"></router-link>
  <div class="flex space-x-12"> 
   <hr class="">
   <router-link to="/"><img class="" src="@/assets/images/home.svg" alt="home"></router-link> 
   <div class="border-l border-red-800 vl"></div> 
   <img src="@/assets/images/topup.svg" alt="topup"> 
  </div>
  </div>
  <!--Sotial Media--> 
  <div class="flex items-center justify-between p-4 s:justify-center s:space-x-16">
    <p class="text-xs uppercase">Мы в соцсетях</p>
    <a href="https://www.facebook.com/irekstrier/" target="_blank"><img src="@/assets/images/facebook.svg" alt="facebook"></a> 
     <a href="https://www.instagram.com/ireks_trier/" target="_blank"><img src="@/assets/images/instagram.svg" alt="instagram"></a> 
    <img src="@/assets/images/youtub.svg" alt="youtub"> 
  </div>
  <p class="p-4 text-xs text-center">© Copyright 2021 by OOO IREKS </p>
</footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>