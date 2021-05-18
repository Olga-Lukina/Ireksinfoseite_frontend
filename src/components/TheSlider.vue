<template>
    
<div class="slider">
               <div class="activImage">
                <img
                    :src="require(`@/assets/images/${productdetail.activImage}`)"
                    :alt="productdetail.name"
                />
               </div>
               <div class="flex images">
                   <div v-for="(image, index) in images">
                <img
                    :src="require(`@/assets/images/${productdetail.images}`)"
                    :alt="productdetail.name"
                    @mouseover="changeActivImage(index)"
                />
                   </div>
               </div>
            </div>
           
   
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>