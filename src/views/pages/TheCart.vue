<template>
  <div class="bg-amber-50 px-4 py-4 pb-36">
    <div class="xl:container xl:max-w-screen-xl pb-4">
      <h1 class="text-[64px] font-bold text-card_p my-5">Корзина</h1>
      <div class="flex flex-row gap-10 my-4">
        <div>
          <button class="text-[12px] text-gray-600">Выделить всё</button>
        </div>
        <button class="text-[12px] text-orange-500 hover:text-orange-700">
          Удалить выбранные
        </button>
      </div>

      <div class="grid grid-cols-3 gap-14 my-5">
        <!-- cart item -->
        <div class="left col-span-2 drop-shadow-xl flex flex-col gap-7">
          <div class="grid grid-cols-12 bg-white rounded-md py-1">
            <div class="col-span-2">
              <img src="../../assets/Images/Item.png" class="h-full" alt="" />
            </div>
            <div class="col-span-6 flex flex-col justify-between my-1">
              <p class="text-[16px] text-card_p">
                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
              </p>
              <p class="text-[12px] text-gray-500">
                <span class="text-[12px] text-card_p font-bold">44,50 ₽ </span
                >за шт.
              </p>
            </div>
            <div class="col-span-2"></div>
            <div class="col-span-2 pr-2">
              <p class="text-end text-[18px] font-bold mt-1 text-card_p">
                89,00 ₽
              </p>
            </div>
          </div>

          <!-- cart item -->
          <div class="grid grid-cols-12 bg-white rounded-md py-1">
            <div class="col-span-2">
              <img src="../../assets/Images/Item.png" class="h-full" alt="" />
            </div>
            <div class="col-span-6 flex flex-col justify-between my-1">
              <p class="text-[16px] text-card_p">
                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
              </p>
              <div>
                <p class="text-[12px] text-gray-500">
                  <span class="text-[12px] text-card_p font-bold">44,50 ₽ </span
                  >за шт.
                </p>
              </div>
            </div>
            <div class="col-span-2"></div>
            <div class="col-span-2 pr-2">
              <p class="text-end text-[18px] font-bold mt-1 text-card_p">
                89,00 ₽
              </p>
            </div>
          </div>

          <!-- cart item -->

          <div class="grid grid-cols-12 bg-white rounded-md py-1">
            <div class="col-span-2">
              <img src="../../assets/Images/Item.png" class="h-full" alt="" />
            </div>
            <div class="col-span-6 flex flex-col justify-between my-1">
              <p class="text-[16px] text-card_p">
                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
              </p>
              <p class="text-[12px] text-gray-500">
                <span class="text-[12px] text-card_p font-bold">44,50 ₽ </span
                >за шт.
              </p>
            </div>
            <div class="col-span-2"></div>
            <div class="col-span-2 pr-2">
              <p class="text-end text-[18px] font-bold mt-1 text-card_p">
                89,00 ₽
              </p>
            </div>
          </div>

          <!-- cart item -->
          <div class="grid grid-cols-12 bg-white rounded-md py-1">
            <div class="col-span-2">
              <img src="../../assets/Images/Item.png" class="h-full" alt="" />
            </div>
            <div class="col-span-6 flex flex-col justify-between my-1">
              <p class="text-[16px] text-card_p">
                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
              </p>
              <p class="text-[12px] text-gray-500">
                <span class="text-[12px] text-card_p font-bold">44,50 ₽ </span
                >за шт.
              </p>
            </div>
            <div class="col-span-2"></div>
            <div class="col-span-2 pr-2">
              <p class="text-end text-[18px] font-bold mt-1 text-card_p">
                89,00 ₽
              </p>
            </div>
          </div>
        </div>

        <div class="right col-span-1">
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-gray-200 peer-focus:ring-0 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-map_btn2"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Списать 200 ₽
              </span>
            </label>
            <p class="text-gray-500">На карте накоплено 200 ₽</p>
            <div class="border-b mt-6 mb-4"></div>
            <div class="flex items-center justify-between">
              <p class="text-gray-500 text-[16px]">3 товара</p>
              <p>258,10 ₽</p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <p class="text-gray-500 text-[16px]">Скидка</p>
              <p class="text-orange-500 font-bold">-8,01 ₽</p>
            </div>
            <div class="border-b mt-6 mb-4"></div>
            <div class="flex items-center justify-between">
              <p class="text-gray-500 text-[16px]">Итог</p>
              <p class="text-card_p text-[24px] font-bold">250,09 ₽</p>
            </div>
            <div class="text-center text-map_btn2 text-[12px] mt-1">
              <p>Вы получяете 100 бонусов</p>
            </div>
            <div class="flex flex-col items-center mt-10 gap-6">
              <button class="bg-red-600 text-[12px] text-white px-3 rounded-md">
                Минимальная сумма заказа 1000р
              </button>
              <button
                class="py-[18px] px-[30px] rounded-md bg-spec_color1 text-[24px] font-bold text-orange-600 hover:text-orange-800"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
