<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto">
      <div v-if="reviews">
        <TheReviewList :reviews="reviews" />
      </div>
    </div>
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
