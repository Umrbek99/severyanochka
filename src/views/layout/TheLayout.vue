<template>
<back-to-top text="Back to top"></back-to-top>
 <div v-if="show">
  <TheHeader/>
  <div>
   <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </div>
  <router-view></router-view>
  <TheFooter/>
 </div>
</template>
<script>

import TheHeader from '../../components/TheHeader.vue';
import TheProducts from '../pages/TheProducts.vue';
import TheFooter from '../../components/TheFooter.vue';

export default {
 components:{
  TheHeader,
  TheProducts,
  TheFooter,
 },
 data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>