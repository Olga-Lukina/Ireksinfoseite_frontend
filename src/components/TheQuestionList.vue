<template>
  <div>
    <div
      class="m-2 bg-white border border-white shadow-md review-container rounded-xl"
    >
      <h3 class="m-4 font-extrabold uppercase text-red-850">Отзывы:</h3>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          "{{ question.question }}"
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
