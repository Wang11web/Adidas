<script setup>
  import { ref } from 'vue';
  import { TweenMax,Power0 }  from 'gsap';
  import { useRouter } from "vue-router";
  const router = useRouter();

  import { useDataStore } from "../stores/data.js";
  import { storeToRefs } from "pinia";
  const dataStore = useDataStore();
  const { theme } = storeToRefs(dataStore);

  const changeTheme = (val)=>{
    theme.value = val;
  }

  const goBack = ()=>{
    TweenMax.to(`.btn_back`,0.2,{scale: 0.8, ease: Power0.easeNone});
    TweenMax.to(`.btn_back`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
    setTimeout(()=>{
      router.replace('./terms');
    },400)
  }

  const confirm = ref(false);
  const goNext = ()=>{
    TweenMax.to(`.btn_next`,0.2,{scale: 0.8, ease: Power0.easeNone});
    TweenMax.to(`.btn_next`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
    setTimeout(()=>{
      if(theme.value!=null) {
        router.replace('./name');
      }
      else {
        confirm.value = true;
      }
    },400)
  }
</script>

<template>
  <div class="vh_100 vw_100 overflow-hidden position-relative">
    <video src="../assets/image/bg-a2.mp4" alt="" class="position-absolute bg_v" playsinline loop autoplay muted></video>
    <div class="position-relative d-flex flex-column align-items-center">
      <img src="../assets/image/0-ADIDAS.png" alt="adidas" width="80" class="mt_item">
      <img src="../assets/image/text3-1.png" alt="選擇主題" width="270" class="mt_item">
      <div class="w-100 d-flex flex-column align-items-center justify-content-around position-relative px-4 choose_area mt_item">
        <div class="d-flex justify-content-between w-100">
          <div class="choose_box position-relative d-flex justify-content-center align-items-center" @click="changeTheme(0)">
            <img src="../assets/image/3-1.png" alt="慢跑">
            <div class="position-absolute w-100 h-100" v-if="theme == 0">
              <img src="../assets/image/3-0.png" alt="active">
            </div>
          </div>
          <div class="choose_box position-relative d-flex justify-content-center align-items-center" @click="changeTheme(2)">
            <img src="../assets/image/3-3.png" alt="拳擊">
            <div class="position-absolute w-100 h-100" v-if="theme == 2">
              <img src="../assets/image/3-0.png" alt="active">
            </div>
          </div>
        </div>
        <div class="d-flex flex-column position-absolute choose_middle">
          <div class="choose_box position-relative d-flex justify-content-center align-items-center" @click="changeTheme(1)">
            <img src="../assets/image/3-2.png" alt="舞蹈">
            <div class="position-absolute w-100 h-100" v-if="theme == 1">
              <img src="../assets/image/3-0.png" alt="active">
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between w-100 mt-5">
          <div class="choose_box position-relative d-flex justify-content-center align-items-center" @click="changeTheme(4)">
            <img src="../assets/image/3-5.png" alt="音樂">
            <div class="position-absolute w-100 h-100" v-if="theme == 4">
              <img src="../assets/image/3-0.png" alt="active">
            </div>
          </div>
          <div class="choose_box position-relative d-flex justify-content-center align-items-center" @click="changeTheme(3)">
            <img src="../assets/image/3-4.png" alt="瑜珈">
            <div class="position-absolute w-100 h-100" v-if="theme == 3">
              <img src="../assets/image/3-0.png" alt="active">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-around position-absolute btn_area">
      <div class="btn_w btn_back" @click="goBack">
        <img src="../assets/image/btn-3-2.png" alt="返回">
      </div>
      <div class="btn_w btn_next" @click="goNext" v-if="theme!=null||!confirm">
        <img src="../assets/image/btn-3.png" alt="下一步">
      </div>
      <div class="btn_w" v-if="theme == null&&confirm">
        <img src="../assets/image/btn-3-n.png" alt="下一步">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .choose_area {
    height: calc(var(--vh, 1vh) * 52);
  }

  .choose_box {
    width: 120px;
  }

  .choose_middle {
    top: 30%;
  }

  @media screen and (max-width:400px) {
    .choose_middle {
      top: 30%;
    }

    .choose_box {
      width: 100px;
    }
  }
</style>