<template>
  <footer>
    <div
      class="flex items-center justify-between px-4 py-2 border-t border-b border-red-800 s:justify-center s:space-x-16"
    >
      <router-link to="/"
        ><img class="max-h-8" src="@/assets/images/logos.svg" alt="ireks-logo"
      /></router-link>
      <div class="flex space-x-12">
        <hr class="" />
        <router-link to="/"
          ><img class="" src="@/assets/images/home.svg" alt="home"
        /></router-link>
        <div class="border-l border-red-800 vl"></div>
        <div class="scroll-to-top">
          <button @click="scrollToTop">
            <img src="@/assets/images/topup.svg" alt="topup" />
          </button>
        </div>
      </div>
    </div>
    <!--Sotial Media-->
    <div
      class="flex items-center justify-between p-4 s:justify-center s:space-x-16"
    >
      <p class="text-xs uppercase">Мы в соцсетях</p>
      <a href="https://www.facebook.com/irekstrier/" target="_blank"
        ><img src="@/assets/images/facebook.svg" alt="facebook"
      /></a>
      <a href="https://www.instagram.com/ireks_trier/" target="_blank"
        ><img src="@/assets/images/instagram.svg" alt="instagram"
      /></a>
      <img src="@/assets/images/youtub.svg" alt="youtub" />
    </div>
    <p class="p-4 text-xs text-center">© Copyright 2021 by OOO IREKS</p>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6);

      function frame() {
        if (0 > currentScroll) clearInterval(int);
        else {
          currentScroll = currentScroll - 12;
          document.documentElement.scrollTop = currentScroll;
        }
      }
    },
  },
};
</script>

<style scoped></style>
