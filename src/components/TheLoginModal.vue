<template>
  <!-- modal -->
  <div v-if="isOpen" class="">
    <div class="absolute h-full w-full bg-orange-400 z-20 opacity-60"></div>
    <div class="relative flex justify-center">
      <div
        class="max-w-[400px] min-w-[225px] h-[400px] bg-white rounded-md z-30 absolute top-40"
      >
        <div class="flex justify-end pr-5 mt-3">
          <button @click="$emit('close')">X</button>
        </div>
        <h1 class="text-center font-bold text-[24px] my-6">Вход</h1>
        <form action="" class="flex flex-col px-5">
          <label for="" class="text-gray-400 text-[18px]">Телефон</label>
          <input
            type="text"
            class="border border-gray-400 rounded-md py-[10px] pr-2 pl-[10px] text-[24px] mb-5"
          />
          <button
            class="py-[10px] rounded-md bg-spec_color1 text-[24px] text-orange-600 hover:text-orange-800"
          >
            Вход
          </button>
        </form>
        <div class="flex justify-between items-center px-6 my-8">
          <button
            class="text-[12px] border border-green-500 text-green-500 py-1 rounded-md px-4"
          >
            Регистрация
          </button>
          <button class="text-[12px]">Забыли пароль?</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
input:focus {
  outline: none;
  border: 1px solid #70c05b;
}
</style>
