<template>
  <div class="relative inline-block text-xl text-yellow-500 star-rating">
    <span v-for="index in starLimit" :key="index">&star; </span>
    <div
      class="absolute top-0 overflow-hidden star-rating__colored whitespace-nowrap"
      :style="{ width: ratingWidth + '%' }"
    >
      <span v-for="index in starLimit" :key="index">&starf; </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 5,
    };
  },
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    ratingWidth() {
      return (this.rating / this.starLimit) * 100;
    },
  },
  methods: {
    randomValue() {
      this.value = (Math.random() * 4 + 1).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
