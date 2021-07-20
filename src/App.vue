<template>
  <div id="app">
    <TheNavigation />
    <div class="container mx-auto">
      <div
        class="p-4 m-4 text-center text-white bg-green-600 flashMessage"
        v-if="GStore.flashMessage"
      >
        {{ GStore.flashMessage }}
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation';
import TheFooter from '@/components/TheFooter';

export default {
  inject: ['GStore'],
  components: {
    TheNavigation,
    TheFooter,
  },
  async created() {
    this.$store.dispatch('autoLogin');
  },
};
</script>
