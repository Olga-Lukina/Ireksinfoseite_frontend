<template>
  <div class="container mx-auto">
    <div class="relative">
      <img
        class="mx-auto border rounded-t-3xl"
        src="@/assets/images/eclir_1.png"
        alt="eclir_1"
      />
      <div
        class="absolute top-0 left-0 flex items-center justify-center w-screen p-4 mx-auto bg-white bg-opacity-50 border rounded-t-3xl"
      >
        <img
          class="mr-auto"
          src="@/assets/images/chevron_left.svg"
          alt="chevron_left"
        />
        <h3 class="mr-auto">Прома эклер</h3>
      </div>
    </div>

    <!--title for productname-->

    <!--Card-->

    <!--Slider-->

    <!--End Card-->
  </div>
</template>

<script>
import store from '@/store.js';
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    productdetailSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    productlisting() {
      return store.productlisting.find(
        (productdetail) => productdetail.slug === this.slug
      );
    },
  },
};
</script>

<style></style>
