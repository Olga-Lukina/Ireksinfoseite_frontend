<template>
  <TheReviewList :reviews="reviews" />
</template>

<script>
import TheReviewList from '@/components/TheReviewList.vue';
export default {
  components: {
    TheReviewList,
  },
};
</script>

<style lang="scss" scoped></style>
