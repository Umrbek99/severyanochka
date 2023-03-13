<template>
  <TheLoginModal :isOpen="isOpen" @close="closeModal" />
  <header class="shadow-lg py-4 sticky top-0 z-10 bg-white">
    <div class="xl:container xl:max-w-screen-xl px-5 flex flex-row w-full">

      <router-link to="/" class="flex items-center md:w-[290px] sm:w-[133px] esm:w-[133px] ">
        <img class="mr-[10px] h-[44px] w-[44px]" src="../assets/Images/logo.svg" alt="" />
        <p class="font-bold md:block sm:hidden mr-[40px]">Северяночка</p>
      </router-link>

      <router-link class="flex items-center justify-between md:w-[260px] esm:w-[100px] sm:w-[100px] bg-green-500 mx-6 px-[10px] rounded-md" to="/catalog">
        <img class="esm:mr-0 sm:mr-0 md:mr-2" src="../assets/Images/menu.svg" alt="" />
        <p class="text-white md:block sm:hidden esm:hidden mr-[40px] ">Каталог</p>
      </router-link>

      <div class="flex items-center w-full mr-[20px]">
        <input class=" pl-[20px] w-full rounded-lg h-full border border-green-500 focus-visible:border-green-400" type="text"
          placeholder="Найти товар" />
      </div>

      <ul class="flex items-center">
        <router-link active-class="active" to="/orders" class="hover:text-green-400 min-w-[42px] min-h-[42px] flex flex-col items-center">
          <li class="flex flex-col items-center md:mx-3 sm:mx-2 esm:mx-1">
            <img class="md:h-[26px]  md:w-[26px] esm:h-[20px]  esm:w-[20px]"
              src="../assets/imagesSecond/Vector.svg" alt="" />
            <p class="hover:text-green-400 md:text-[15px] sm:text-[13px] esm:text-[11px]">Заказы</p>
          </li>
        </router-link>
        <li class="flex flex-col items-center md:mx-3 sm:mx-2 esm:mx-1">
          <router-link active-class="active" to="/liked" class="hover:text-green-400 min-w-[42px] min-h-[42px] flex flex-col items-center">
            <img class="md:h-[26px]  md:w-[26px] esm:h-[20px]  esm:w-[20px]" src="../assets/imagesSecond/Vector1.svg" alt="" />
            <p class="hover:text-green-400 md:text-[15px] sm:text-[13px] esm:text-[11px]">Избранные</p>
          </router-link>
        </li>
        <li class="flex flex-col items-center md:mx-3 sm:mx-2 esm:mx-1">
          <router-link active-class="active" to="/cart" class="hover:text-green-400 min-w-[42px] min-h-[42px] flex flex-col items-center">
            <img class="md:h-[26px]  md:w-[26px] esm:h-[20px] esm:w-[20px]" src="../assets/imagesSecond/Basket.svg" alt="" />
            <p class="hover:text-green-400 md:text-[15px] sm:text-[13px] esm:text-[11px]">Корзина</p>
          </router-link>
        </li>
        <li class="flex flex-col items-center md:mx-3 sm:mx-2 esm:mx-1">
          <div active-class="active" to="/login" class="cursor-pointer hover:text-green-400 min-w-[42px] min-h-[42px] flex flex-col items-center">
            <img class="md:h-[26px]  md:w-[26px] esm:h-[20px]  esm:w-[20px]" src="../assets/imagesSecond/User.svg" alt="" />
            <p class="hover:text-green-400 md:text-[15px] sm:text-[13px] esm:text-[11px]" @click="showModal">Войти</p>
          </div>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
import TheLoginModal from "./TheLoginModal.vue";

export default {
  components: {
    TheLoginModal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    showModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.active {
  color: rgb(40, 168, 40);
  filter: invert(50%) sepia(86%) saturate(424%) hue-rotate(71deg) brightness(87%) contrast(100%);
}
</style>
