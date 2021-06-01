<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container">
      <div class="flex flex-col m-4 bg-grey-lighter">
        <div
          class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto"
        >
          <div
            class="w-full px-6 py-8 text-black rounded shadow-md rounded-t-3xl"
          >
            <h3 class="mb-8 text-3xl text-center">Регистрация</h3>
            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="name"
              placeholder="Имя"
            />
            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="surname"
              placeholder="Фамилия"
            />
            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="telephone"
              placeholder="Контактный телефон"
            />

            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="email"
              placeholder="Контактный e-mail"
            />
            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="companyname"
              placeholder="Название предприятия"
            />
            <input
              type="text"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="jobposition"
              placeholder="Занимаемая должность"
            />

            <input
              type="password"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="Password"
              placeholder="Пароль"
            />
            <input
              type="password"
              class="block w-full p-3 mb-4 border rounded border-grey-light"
              name="confirm_password"
              placeholder="Подтвердить пароль"
            />

            <button
              type="submit"
              class="w-full py-3 my-1 text-center text-white rounded bg-red-850 border-1 hover:bg-red-700 bg-green hover:bg-green-dark focus:outline-none"
            >
              Отправить
            </button>
            <div class="flex items-center justify-between my-4">
              <div class="flex items-center">
                <input class="mr-2" type="checkbox" name="save" value="save" />
                <label for="save" class="select-none">Запомнить</label>
              </div>

              <div class=" text-red-850">
                <router-link to="/login">войти</router-link>
              </div>
            </div>
            <div class="mt-4 text-sm text-center text-grey-dark">
              Настоящим подтверждаю, что ознакомился
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                с положением о конфиденциальности
              </a>

              и принимаю его.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: false,
    };
  },
};
</script>
