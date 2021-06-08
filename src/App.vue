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
  components: {
    TheNavigation,
    TheFooter,
  },
  async created() {
    this.$store.commit('me');
  },
};
</script>
