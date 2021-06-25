<template>
  <div>
    <h3 class="m-4 font-extrabold text-center uppercase text-red-850">
      Отзывы:
    </h3>
    <ul>
      <li
        class="m-4 bg-white border border-white shadow-xl review-container rounded-xl"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <p class="m-2 text-right text-red-850">{{ review.rating }} звезда</p>
        <p class="m-2 text-center">"{{ review.content }}"</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    reviews: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
