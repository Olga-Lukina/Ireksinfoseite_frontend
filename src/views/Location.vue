<template>
  <!--Slider-->
  <div class="container mx-auto">
    <div class="relative">
      <img
        class="mx-auto border rounded-t-3xl"
        src="@/assets/images/eclir_1.png"
        alt="eclir_1"
      />
      <div
        class="absolute top-0 left-0 flex items-center justify-center w-screen p-4 mx-auto bg-white bg-opacity-50 border rounded-t-3xl"
      >
        <img
          class="mr-auto"
          src="@/assets/images/chevron_left.svg"
          alt="chevron_left"
        />
        <h3 class="mr-auto">Прома эклер</h3>
      </div>
    </div>
    <!--title and desctiption for productname-->
    <h1 class="m-4 text-xl font-extrabold uppercase ">Прома эклер</h1>
    <p class="m-4">Сухая смесь для приготовления заварного полуфабриката.</p>
    <!--Recepies-->
    <h2 class="m-4 font-extrabold text-red-800 uppercase">
      Рецеатуры использования:
    </h2>
    <RecipeGrid :recipes="recipes" />
    <!--TU-->
    <div
      class="flex justify-between m-2 bg-white border border-white shadow-md"
    >
      <h2 class="m-4 font-extrabold text-red-800 uppercase">
        Разработанные ТУ:
      </h2>
      <img
        class="m-4 transform -rotate-90"
        src="@/assets/images/chevron_left.svg"
        alt="chevron_left"
      />
    </div>
    <!--Videorecepies-->
    <div>
      <h2 class="m-4 font-extrabold text-red-800 uppercase">
        Видеорецепты:
      </h2>
    </div>
    <!--Marketing-->
    <div>
      <h2 class="m-4 font-extrabold text-red-800 uppercase">
        Проекты маркетинговой поддержки:
      </h2>
    </div>
    <!--can be intresting-->
    <div>
      <h2 class="m-4 font-extrabold text-red-800 uppercase">
        Вас так же может заинтересовать:
      </h2>
    </div>
    <!--can be intresting-->
    <div
      class="flex items-center justify-between m-2 bg-white border border-white shadow-md"
    >
      <h2 class="m-4 font-extrabold text-red-800 uppercase">
        Отзывы:
      </h2>
      <p>всего 19</p>
      <img
        class="m-4 transform rotate-180"
        src="@/assets/images/chevron_left.svg"
        alt="chevron_left"
      />
    </div>
    <!-- stars rating -->
    <div class="flex items-center justify-between m-4">
      <div class="flex items-center justify-start ">
        <div
          v-for="index in 5"
          :key="index"
          class="flex items-center mt-2 mb-4"
        >
          <button>
            <svg
              class="w-8 h-8 mx-1 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p>5/5</p>
    </div>
  </div>
</template>
