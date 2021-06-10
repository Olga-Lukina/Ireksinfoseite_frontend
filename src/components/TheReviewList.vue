<template>
  <div>
    <div
      class="m-2 bg-white border border-white shadow-md review-container rounded-xl"
    >
      <h3 class="m-4 font-extrabold uppercase text-red-850">Отзывы:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br />
          "{{ review.review }}"
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
