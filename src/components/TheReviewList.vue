<template>
  <div>
    <h3 class="m-4 font-extrabold text-center uppercase text-red-850">
      Reviews:
    </h3>
    <ul>
      <li
        class="m-4 bg-white border border-white shadow-xl review-container rounded-xl"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <p class="m-4 text-left text-red-850">
          <StarRating :rating="review.rating" />
        </p>

        <p class="m-4 text-center">"{{ review.content }}"</p>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue';
export default {
  props: {
    reviews: Array,
  },
  data() {
    return {};
  },
  components: {
    StarRating,
  },
};
</script>

<style lang="scss" scoped></style>
