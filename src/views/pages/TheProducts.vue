<template>
  <div class="bg-amber-50">
    <TheLanding />
    <div class="py-10" v-for="item in 4">
      <div class="xl:container xl:max-w-screen-xl">
        <div class="flex justify-between items-center mx-4 py-5">
          <h4 class="text-[36px] font-bold">Акции</h4>
          <div>
            <small class="text-gray-500 text-[16px]">Все акции</small>
          </div>
        </div>
        <div
          class="flex flex-wrap gap-4 justify-center xl:flex lx:flex-row xl:justify-between"
        >
          <TheCard v-for="item in 4" />
        </div>
      </div>
    </div>
    <!-- special offer -->
    <div class="xl:container xl:max-w-screen-xl py-12">
      <h4 class="text-[40px] py-10 font-bold">Специальные предложения</h4>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-spec_color1 items-center col-span-1 grid grid-cols-2 rounded-xl drop-shadow-md"
        >
          <div class="pl-8 col-span-1">
            <p class="text-[24px] font-bold text-card_p">
              Оформите карту «Северяночка»
            </p>
            <p class="text-card_p">
              И получайте бонусы при покупке в магазинах и на сайте
            </p>
          </div>
          <div class="col-span-1">
            <img
              src="../../assets/Images/СеверяночкаShare10/spec2.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="bg-spec_color2 items-center col-span-1 grid grid-cols-2 rounded-xl drop-shadow-md"
        >
          <div class="pl-8 col-span-1">
            <p class="text-[24px] font-bold text-card_p">
              Покупайте акционные товары
            </p>
            <p class="text-card_p">И получайте вдвое больше бонусов</p>
          </div>
          <div class="col-span-1 pl-10">
            <img
              src="../../assets/Images/СеверяночкаShare10/spec1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- map -->
    <div class="xl:container xl:max-w-screen-xl">
      <h4 class="text-[40px] py-10 font-bold">Наши магазины</h4>
      <div class="flex flex-row flex-wrap gap-4">
        <button class="px-8 py-4 bg-map_btn2 rounded-xl text-white">
          п.Щельяюр
        </button>
        <button class="px-8 py-4 bg-map_btn1 rounded-xl text-card_p">
          д.Вертеп
        </button>
        <button class="px-8 py-4 bg-map_btn1 rounded-xl text-card_p">
          с.Краснобор
        </button>
        <button class="px-8 py-4 bg-map_btn1 rounded-xl text-card_p">
          д.Диюр
        </button>
      </div>

      <div class="py-10">
        <iframe
          class="w-full h-96 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1403.300171755715!2d30.210525781870967!3d69.40742634656222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4434abbe185528d3%3A0x6bc98f634793c2a6!2z0KHQtdCy0LXRgNGP0L3QvtGH0LrQsA!5e0!3m2!1sru!2s!4v1677611858586!5m2!1sru!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <!-- news -->
    <div class="xl:container xl:max-w-screen-xl py-12">
      <div class="flex justify-between items-center mx-4 py-5">
        <h4 class="text-[36px] font-bold">Статьи</h4>
        <div>
          <small class="text-gray-500 text-[16px]">Все статьи</small>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-10">
        <!-- news card -->
        <div class="col-span-1 bg-white">
          <img
            class="object-cover w-full rounded-t-lg"
            src="../../assets/Images/СеверяночкаShare11/image2.png"
            alt=""
          />
          <div class="px-[10px]">
            <small class="text-[12px] text-small">05.03.2021</small>
            <h5 class="text-[20px] text-card_p font-bold my-3">
              Режим использования масок и перчаток на территории магазинов
            </h5>
            <p class="text-card_p">
              Подробная информация о режимах использования масок и перчаток на
              территории магазинов "ЛЕНТА". Информация обновляется каждый будний
              день.
            </p>
            <button class="px-[16px] py-[8px] bg-news_btn1 text-map_btn2 my-2">
              Подробнее
            </button>
          </div>
        </div>

        <!-- news card -->
        <div class="col-span-1 bg-white">
          <img
            class="object-cover w-full rounded-t-lg"
            src="../../assets/Images/СеверяночкаShare11/image3.png"
            alt=""
          />
          <div class="px-[10px]">
            <small class="text-[12px] text-small">05.03.2021</small>
            <h5 class="text-[20px] text-card_p font-bold my-3">
              Режим использования масок и перчаток на территории магазинов
            </h5>
            <p class="text-card_p">
              Подробная информация о режимах использования масок и перчаток на
              территории магазинов "ЛЕНТА". Информация обновляется каждый будний
              день.
            </p>
            <button
              class="px-[16px] py-[8px] rounded-md bg-map_btn2 text-white my-2"
            >
              Подробнее
            </button>
          </div>
        </div>

        <!-- news card -->
        <div class="col-span-1 bg-white">
          <img
            class="object-cover w-full rounded-t-lg"
            src="../../assets/Images/СеверяночкаShare11/image1.png"
            alt=""
          />
          <div class="px-[10px]">
            <small class="text-[12px] text-small">05.03.2021</small>
            <h5 class="text-[20px] text-card_p font-bold my-3">
              Режим использования масок и перчаток на территории магазинов
            </h5>
            <p class="text-card_p">
              Подробная информация о режимах использования масок и перчаток на
              территории магазинов "ЛЕНТА". Информация обновляется каждый будний
              день.
            </p>
            <button class="px-[16px] py-[8px] bg-news_btn1 text-map_btn2 my-2">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheLanding from "../pages/TheLanding.vue";
import TheCard from "../../components/TheCard.vue";
export default {
  components: {
    TheCard,
    TheLanding,
  },
};
</script>
