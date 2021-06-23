<template>
  <div v-if="reviews">
    <TheReviewList :reviews="reviews" />
  </div>
</template>

<script>
import service from '@/service.js';
import TheReviewList from '@/components/TheReviewList.vue';
export default {
  data() {
    return {
      reviews: [],
    };
  },
  components: {
    TheReviewList,
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    async getReviews() {
      try {
        const response = await service.getReviews(
          this.$route.params.product_id
        );
        this.reviews = response.data;
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
