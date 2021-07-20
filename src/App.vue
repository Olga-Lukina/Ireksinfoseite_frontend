<template>
  <div id="app">
    <TheNavigation />
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
