<template>
  <div class="bg-amber-50 px-4 py-4">
    <div class="xl:container xl:max-w-screen-xl pb-4">
      <h1 class="text-[64px] font-bold text-card_p my-5">Заказы</h1>
      <div class="flex justify-between items-center ">
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px] font-bold text-card_p">01.04.2021</p>
          <p class="text-[24px] font-bold text-card_p">11:00-14:00</p>
          <p class="text-card_p bg-map_btn1 px-[12px] py-[4px] text-[16px] rounded-sm hover:text-map_btn2">В процессе</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px]">3 006,83 ₽</p>
          <button class="py-[8px] px-[30px] bg-map_btn2 rounded-lg text-white">Когда доставить</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center xl:flex lx:flex-row xl:justify-between mt-10">
        <TheCard v-for="item in 4" class="mb-4"/>
      </div>
      <div class="flex items-center justify-center my-10">
          <button class="text-card_p bg-map_btn1 px-[12px] py-[4px] text-[16px] rounded-sm hover:text-map_btn2">Просмотреть заказ</button>
      </div>

      <div class="flex justify-between items-center  mt-20">
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px] font-bold text-card_p">01.04.2021</p>
          <p class="text-[24px] font-bold text-card_p">11:00-14:00</p>
          <p class=" bg-red-600 text-white px-[12px] py-[4px] text-[16px] rounded-lg ">Не доставили</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px]">3 006,83 ₽</p>
          <button class="py-[8px] px-[40px] bg-orange-500 rounded-lg text-white">Заказать</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center xl:flex lx:flex-row xl:justify-between mt-10">
        <TheCard v-for="item in 4" class=""/>
      </div>

      

      <div class="flex justify-between items-center mt-20">
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px] font-bold text-card_p">01.04.2021</p>
          <p class="text-[24px] font-bold text-card_p">11:00-14:00</p>
          <p class=" bg-red-600 text-white px-[12px] py-[4px] text-[16px] rounded-lg ">Возврат</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px]">3 006,83 ₽</p>
          <button class="py-[8px] px-[40px] bg-orange-500 rounded-lg text-white">Заказать</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center xl:flex lx:flex-row xl:justify-between mt-10">
        <TheCard v-for="item in 4" class=""/>
      </div>



      <div class="flex justify-between items-center mt-20">
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px] font-bold text-card_p">01.04.2021</p>
          <p class="text-[24px] font-bold text-card_p">11:00-14:00</p>
          <p class="text-white bg-map_btn2 px-[12px] py-[4px] text-[16px] rounded-lg ">Получен</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <p class="text-[24px]">3 006,83 ₽</p>
          <button class="py-[8px] px-[40px] bg-orange-500 rounded-lg text-white">Заказать</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center xl:flex lx:flex-row xl:justify-between mt-10">
        <TheCard v-for="item in 4" class=""/>
      </div>
      <div class="flex items-center justify-center my-10">
          <button class="text-gray-600 bg-map_btn1 px-[20px] py-[10px] text-[24px] rounded-sm hover:text-map_btn2">Показать ещё</button>
      </div>

    </div>
  </div>
</template>
<script>
  import TheCard from '../../components/TheCard.vue'
  export default {
    components:{
      TheCard
    }
  }
</script>
