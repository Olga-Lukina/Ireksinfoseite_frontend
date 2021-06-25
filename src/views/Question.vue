<template>
  <div v-if="questions">
    <TheQuestionList :questions="questions" />
  </div>
</template>

<script>
import service from '@/service.js';
import TheQuestionList from '@/components/TheQuestionList.vue';
export default {
  setup() {
    return {
      questions: [],
    };
  },
  components: {
    TheQuestionList,
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    async getQuestions() {
      try {
        const response = await service.getQuestions(
          this.$route.params.product_id
        );
        this.questions = response.data;
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
