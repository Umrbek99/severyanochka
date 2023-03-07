<template>
    <TheLoginModal :isOpen="isOpen" @close="closeModal" />
  <header class="shadow-lg py-4 sticky top-0 z-10 bg-white">
    <div
      class="xl:container xl:max-w-screen-xl px-5 flex justify-between flex-wrap items-center"
    >
      <div class="flex flex-row max-w-[70%]">
        <div class="pr-4">
          <router-link to="/">
            <div class="flex justify-between items-center">
              <img class="mr-[10px]" src="../assets/Images/logo.svg" alt="" />
              <p class="font-bold md:block sm:hidden">Северяночка</p>
            </div>
          </router-link>
        </div>
        <div class="pr-4">
          <router-link to="/catalog">
            <div class="p-[8px] bg-green-500 flex text-white rounded-lg">
              <img class="" src="../assets/Images/menu.svg" alt="" />
              <p class="px-[13px]">Каталог</p>
            </div>
          </router-link>
        </div>
        <div class="flex justify-between items-center pr-4">
          <div class="flex">
            <input
              class="w-[400px] pl-[20px] rounded-l-lg h-[40px] border border-green-500 focus-visible:border-green-400"
              type="text"
              placeholder="Найти товар"
            />
            <button class="bg-green-500 px-3 rounded-r-lg">
              <img src="../assets/imagesSecond/Vector2.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <nav class="md:flex hidden">
          <ul class="flex items-center gap-8">
            <router-link
              active-class="active"
              to="/orders"
              class="hover:text-green-400 flex flex-col items-center"
            >
              <li class="flex flex-col items-center">
                <img
                  class="w-[26px] h-[26px] filterit"
                  src="../assets/imagesSecond/Vector.svg"
                  alt=""
                />
                <p class="hover:text-green-400">Заказы</p>
              </li>
            </router-link>
            <li class="flex flex-col items-center">
              <router-link
                active-class="active"
                to="/liked"
                class="hover:text-green-400 flex flex-col items-center"
              >
                <img
                  class="w-[26px] h-[26px]"
                  src="../assets/imagesSecond/Vector1.svg"
                  alt=""
                />
                <p class="hover:text-green-400">Избранные</p>
              </router-link>
            </li>
            <li class="flex flex-col items-center">
              <router-link
                active-class="active"
                to="/cart"
                class="hover:text-green-400 flex flex-col items-center"
              >
                <img
                  class="w-[26px] h-[26px]"
                  src="../assets/imagesSecond/Basket.svg"
                  alt=""
                />
                <p class="hover:text-green-400">Корзина</p>
              </router-link>
            </li>
            <li class="flex flex-col items-center">
              <div
                active-class="active"
                to="/login"
                class="cursor-pointer hover:text-green-400 flex flex-col items-center"
              >
                <img
                  class="w-[26px] h-[26px]"
                  src="../assets/imagesSecond/User.svg"
                  alt=""
                />
                <p class="hover:text-green-400" @click="showModal">Войти</p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="md:hidden">
      <small>---</small>
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
  filter: invert(50%) sepia(86%) saturate(424%) hue-rotate(71deg)
    brightness(87%) contrast(100%);
}
</style>
