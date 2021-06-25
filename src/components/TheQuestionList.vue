<template>
  <div>
    <div
      class="m-2 bg-white border border-white shadow-md review-container rounded-xl"
    >
      <h3 class="m-4 font-extrabold uppercase text-red-850">Вопрос:</h3>
      <ul>
        <li
          class="m-4 bg-white border border-white shadow-xl review-container rounded-xl"
          v-for="(question, index) in questions"
          :key="index"
        >
          <p class="m-2 text-center">"{{ question.content }}"</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
