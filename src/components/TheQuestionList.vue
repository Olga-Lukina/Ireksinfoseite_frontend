<template>
  <div>
    <h3 class="m-4 font-extrabold text-center uppercase text-red-850">
      Questions:
    </h3>
    <div>
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
};
</script>

<style lang="scss" scoped></style>
