<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto" style="min-height: 80vh">
      <div v-if="questions">
        <TheQuestionList :questions="questions" />
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/service.js';
import TheQuestionList from '@/components/TheQuestionList.vue';
export default {
  data() {
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
        const response = await service.getProductDetail(
          this.$route.params.slug
        );
        console.log(response.data);
        this.questions = response.data.questions;
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
