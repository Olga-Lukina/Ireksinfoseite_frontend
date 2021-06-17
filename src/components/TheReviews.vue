<template>
  <!--reviews -->
  <router-link
    to="/review"
    class="flex items-center justify-between m-2 bg-white border border-white shadow-md"
  >
    <h2 class="m-4 font-extrabold uppercase text-red-850">
      Отзывы:
    </h2>
    <p>всего 19</p>
    <img
      class="m-4 transform rotate-180"
      src="@/assets/images/chevron_left.svg"
      alt="chevron_left"
    />
  </router-link>

  <!-- live review -->
  <form action="post" class="m-4 review-form" @submit.prevent="onSubmit">
    <h2 class="my-4 font-extrabold text-center uppercase text-red-850">
      Оставить свой отзыв о продукте:
    </h2>
    <label for="rating">Ваша отценка:</label>
    <select class="m-4 reting" v-model.number="rating">
      <!-- add 2-way binding -->
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <input
      v-model="name"
      placeholder="Имя"
      class="block w-full p-3 mb-4 border rounded name border-grey-light"
    />
    <label for="review">Написать отзыв:</label>
    <div class="relative h-full">
      <textarea
        v-model="review"
        class="w-full mx-auto my-4 border rounded-t resize-y review h-36"
      ></textarea>
      <button
        class="absolute bottom-0 right-0 w-full p-2 text-white rounded-b bg-red-850 border-1 hover:bg-red-700"
        type="submit"
        value="Submit"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
export default {
  // bind to data
  data() {
    return {
      name: '',
      review: '',
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      // review sending to product
      this.$emit('review-submitted', productReview);
      this.name = '';
      this.review = '';
      this.rating = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
