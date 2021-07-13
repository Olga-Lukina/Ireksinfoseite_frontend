<template>
  <!--reviews -->
  <router-link
    :to="'/review/' + productslug"
    class="flex items-center justify-between m-2 bg-white border border-white shadow-md"
  >
    <h2 class="m-4 font-extrabold uppercase text-red-850">
      Reviews:
    </h2>
    <p>total {{ reviews?.length }}</p>
    <img
      class="m-4 transform rotate-180"
      src="@/assets/images/chevron_left.svg"
      alt="chevron_left"
    />
  </router-link>

  <!-- live review -->
  <form action="post" class="m-4 review-form" @submit.prevent="onSubmit">
    <h2 class="my-4 font-extrabold text-center uppercase text-red-850">
      Live your reviews:
    </h2>
    <label for="rating">Your rating:</label>
    <select class="m-4 reting" v-model.number="rating">
      <!-- add 2-way binding -->
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
    <br />
    <StarRating :rating="rating" />
    <br />
    <label for="review"> Live your review:</label>
    <div class="relative h-full ">
      <textarea
        v-model="content"
        class="w-full mx-auto my-4 border rounded-t resize-y review h-36"
      ></textarea>
      <button
        class="absolute bottom-0 right-0 w-full p-2 text-white rounded-b bg-red-850 border-1 hover:bg-red-700"
        type="submit"
        value="Submit"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
import StarRating from '@/components/StarRating.vue';
export default {
  // bind to data
  props: {
    productslug: String,
    reviews: Array,
  },
  components: {
    StarRating,
  },
  data() {
    return {
      content: '',
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        content: this.content,
        rating: this.rating,
      };
      console.log(productReview);
      // review sending to product
      this.$emit('review-submitted', productReview);
      this.content = '';
      this.rating = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
