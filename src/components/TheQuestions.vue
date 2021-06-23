<template>
  <!-- questions -->
  <router-link
    to="/question"
    class="flex items-center justify-between m-2 bg-white border border-white shadow-md"
  >
    <h2 class="m-4 font-extrabold uppercase text-red-850">
      Вопросы:
    </h2>
    <p>всего 10</p>
    <img
      class="m-4 transform rotate-180"
      src="@/assets/images/chevron_left.svg"
      alt="chevron_left"
    />
  </router-link>
  <!-- ask question -->
  <form action="post" class="m-4 review-form" @submit.prevent="onSubmit">
    <h2 class="my-4 font-extrabold text-center uppercase text-red-850">
      Задать свой вопрос о продукте:
    </h2>
    <div class="relative h-full">
      <textarea
        v-model="question"
        class="w-full mx-auto border rounded-t resize-y h-36"
      ></textarea>
      <button
        class="absolute bottom-0 right-0 w-full p-2 text-white rounded-b bg-red-850 border-1 hover:bg-red-700"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      question: '',
    };
  },
  methods: {
    onSubmit() {
      let productQuestion = {
        question: this.question,
      };
      // review sending to product
      this.$emit('question-submitted', productQuestion);
      this.question = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
