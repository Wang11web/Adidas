<script setup>
  import { ref, onMounted, computed } from 'vue';
  import { TweenMax,Power0 }  from 'gsap';
  import { useRouter } from "vue-router";
  const router = useRouter();

  import { useDataStore } from "../stores/data.js";
  import { storeToRefs } from "pinia";
  const dataStore = useDataStore();
  const { order, gender } = storeToRefs(dataStore);

  const breathe = onMounted(()=>{
    TweenMax.to(`.breathe_light`,1,{opacity: 0.3, yoyo: true, repeat: -1});
  })

  const orderSum = computed(()=>{
    const result = `${order.value}`;
    return result.length<4?("000"+result).substr(-4):result;
  })
</script>

<template>
  <div class="vh_100 vw_100 overflow-hidden position-relative">
    <video src="../assets/image/bg-a1.mp4" alt="" class="position-absolute bg_v" playsinline loop autoplay muted></video>
    <div class="position-relative w-100 h-100 d-flex flex-column align-items-center">
      <img src="../assets/image/0-ADIDAS.png" alt="adidas" width="80" class="mt_item">
      <img src="../assets/image/text5-1.png" alt="恭喜完成" width="300" class="mt_item">
      <div class="mt_item position-relative number_box d-flex justify-content-center align-items-center">
        <div class="position-absolute white_box white_box_0"></div>
        <div class="position-absolute white_box white_box_1"></div>
        <div class="position-absolute white_box white_box_2"></div>
        <div class="position-absolute white_box white_box_3"></div>
        <div class="position-relative h-100 overflow-hidden">
          <img src="../assets/image/0-lbg.png" alt="lbg" class="number_frame">
          <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light top_light position-absolute">
          <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light bottom_light position-absolute">
          <div class="order_number position-absolute z-3 text-end">
            <img src="../assets/image/text5-3.png" alt="light" width="90">
            <div class="order_order">#{{ orderSum }}</div>
          </div>
          <div class="position-absolute w-100 h-100 start-0 top-0">
            <div class="position-relative py-3 px-3 h-100 d-flex justify-content-center">
              <img src="../assets/image/ugc0.jpg" alt="ufc" class="h-100" v-if="gender == 0">
              <img src="../assets/image/ugc1.jpg" alt="ufc" class="h-100" v-if="gender == 1">
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/image/text5-2.png" alt="體驗完成" width="200" class="my-auto">
    </div>
  </div>
</template>

<style scoped>
  .bg_repeat {
    background: url('../assets/image/0-LOGO.png');
    background-size: contain;
  }
  .number_frame {
    width: 57vw;
    height: calc(var(--vh, 1vh) * 62);
  }
  .breathe_light {
    opacity: 0.8;
  }
  .top_light {
    top: -6px;
    left: -60px;
  }
  .bottom_light {
    rotate: 180deg;
    bottom: -6px;
    right: -60px;
  }
  .order_number {
    top: 12%;
    right: 1px;
  }
  .ugc {
    height: 100%;
  }
  .order_order {
    font-family: adineuePROCond-R;
    font-size: 28px;
    color: #fff;
    letter-spacing: 1px;
    transform: skew(-20deg);
    margin-right: 28px;
  }
</style>