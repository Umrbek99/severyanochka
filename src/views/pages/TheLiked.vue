<template>
  <div class="bg-amber-50 px-4 py-4">
    <div class="xl:container xl:max-w-screen-xl pb-4">
      <h1 class="text-[64px] font-bold text-card_p my-5">Избраное</h1>

      <div class="grid grid-cols-12 gap-10 mt-10">
        <div class="col-span-3">
          <div class="bg-map_btn1 rounded-sm p-[10px]">
            <p class="font-bold text-[16px]">Фильтр</p>
          </div>
          <div class="flex items-center justify-between my-7">
            <p class="text-[16px]">Цена</p>
            <button
              class="text-card_p bg-map_btn1 px-[8px] py-[4px] text-[12px] rounded-sm hover:text-map_btn2"
            >
              Очистить
            </button>
          </div>
          <div class="flex flex-row gap2">
            <input
              class="w-[45%] py-[4px] px-[16px] border border-small rounded-md"
              type="text"
            />
            <div
              class="w-[10%] flex flex-col items-center justify-between px-[5px]"
            >
              <div></div>
              <div class="bg-gray-700 h-[2px] rounded-xl w-full"></div>
              <div></div>
            </div>
            <input
              class="w-[45%] py-[4px] px-[16px] border border-small rounded-md"
              type="text"
            />
          </div>
          <div class="mt-4">
            <input type="range" class="w-full text-green-500 bg-amber-50" />
          </div>
          <div class="flex flex-col items-start">
            <button class="text-card_p text-[16px]">Молоко</button>
            <button class="my-[15px] text-card_p text-[16px]">Сливки</button>
            <button class="text-card_p text-[16px]">Яйцо</button>
          </div>
          <div class="mt-10 mb-7">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-gray-200 peer-focus:ring-0 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-map_btn2"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >В наличии</span
              >
            </label>
          </div>
          <div>
            <button
              class="w-full bg-orange-500 text-white py-[8px] px-[5px] text-center rounded-md"
            >
              Применить
            </button>
          </div>
        </div>
        <div class="col-span-9">
          <div class="flex flex-row flex-wrap gap-4">
            <button
              class="bg-map_btn2 px-[8px] py-[8px] text-[12px] rounded-sm text-white hover:text-green-800"
            >
              Фильтр 4
            </button>
            <button
              class="bg-map_btn2 px-[8px] py-[8px] text-[12px] rounded-sm text-white hover:text-gray-800"
            >
              Цена от 99 до 2599
            </button>
            <button
              class="text-card_p bg-map_btn1 px-[8px] py-[8px] text-[12px] rounded-sm hover:text-map_btn2"
            >
              Очистить фильтры
            </button>
          </div>

          <div class="grid grid-cols-3 gap-5 mt-4">
            <TheCard v-for="item in 6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheCard from "../../components/TheCard.vue";
export default {
  components: {
    TheCard,
  },
};
</script>
<style>
d input:focus {
  outline: none;
  border: 1px solid #70c05b;
}

input[type="range"] {
  height: 28px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
  border: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 7px;
  cursor: pointer;
  translate: 0.2s;
  box-shadow: 0px 0px 0px #002200;
  background: #70c05b;
  border-radius: 10px;
  border: 0px solid #93d577;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #70c05b;
  border: 1px solid #336834;
  height: 17px;
  width: 17px;
  border-radius: 23px;
  background: #70c05b;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #70c05b;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  translate: 0.2s;
  box-shadow: 0px 0px 0px #002200;
  background: #70c05b;
  border-radius: 10px;
  border: 0px solid #93d577;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #00aa00;
  border: 0px solid #83e584;
  height: 22px;
  width: 23px;
  border-radius: 23px;
  background: #70c05b;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  translate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #70c05b;
  border: 0px solid #93d577;
  border-radius: 20px;
  box-shadow: 0px 0px 0px #002200;
}
input[type="range"]::-ms-fill-upper {
  background: #70c05b;
  border: 0px solid #93d577;
  border-radius: 20px;
  box-shadow: 0px 0px 0px #002200;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #00aa00;
  border: 0px solid #83e584;
  height: 22px;
  width: 23px;
  border-radius: 23px;
  background: #70c05b;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #70c05b;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #70c05b;
}
</style>
