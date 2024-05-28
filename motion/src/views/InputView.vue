<script setup>
  import { ref, onMounted } from 'vue';
  import { TweenMax,Power0 }  from 'gsap';
  import { useRouter } from "vue-router";
  const router = useRouter();

  import { useDataStore } from "../stores/data.js";
  import { storeToRefs } from "pinia";
  const dataStore = useDataStore();
  const { userName, gender, order, theme } = storeToRefs(dataStore);

  const checkbox = ref(false);
  const confirm = ref(false);
  const breathe = onMounted(()=>{
    TweenMax.to(`.breathe_light`,1,{opacity: 0.3, yoyo: true, repeat: -1});
  })

  const changeGender = (val)=>{
    gender.value = val;
  }

  const goBack = ()=>{
    TweenMax.to(`.btn_back`,0.2,{scale: 0.8, ease: Power0.easeNone});
    TweenMax.to(`.btn_back`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
    setTimeout(()=>{
      router.replace('./theme');
    },400)
  }
  
  let click = false;
  const goFin = ()=>{
    if(!click){
      click = true;
      TweenMax.to(`.btn_fin`,0.2,{scale: 0.8, ease: Power0.easeNone});
      TweenMax.to(`.btn_fin`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
      setTimeout(()=>{
        if(userName.value&&gender.value!=null) {
          userName.value = userName.value.replace(/[^a-zA-Z\s]/g,'');
          fetch('https://adidasznelab.com.tw:8787/POST_SignUp',{
              method: 'POST',
              headers: {
                  "Content-Type": `application/json`,
              },
              body: JSON.stringify({
                  "name": userName.value.toString(),
                  "gender": Number(gender.value),
                  "type": Number(theme.value)
              })
          }).then((res) => {
              return res.json()
          }).then((json)=>{
              if(json.result) {
                order.value = json.index;
                router.replace('./fin');
              }
          })
        }
        else {
          confirm.value = true;
          click = false;
        }
      },400)
    }
  }
</script>

<template>
  <div class="vh_100 vw_100 overflow-hidden position-relative">
    <video src="../assets/image/bg-a1.mp4" alt="" class="position-absolute bg_v" playsinline loop autoplay muted></video>
    <div class="position-relative w-100 h-100 d-flex flex-column align-items-center">
      <img src="../assets/image/0-ADIDAS.png" alt="adidas" width="80" class="mt_item">
      <img src="../assets/image/text4-1.png" alt="打造你的分身" width="350" class="mt_item">
      <div class="w-100 mt-2 px-5">
        <div class="number_box d-flex justify-content-center align-items-center position-relative">
          <div class="position-absolute white_box white_box_0"></div>
          <div class="position-absolute white_box white_box_1"></div>
          <div class="position-absolute white_box white_box_2"></div>
          <div class="position-absolute white_box white_box_3"></div>
          <div class="position-relative w-100 h-100 overflow-hidden d-flex flex-column justify-content-around">
            <img src="../assets/image/0-lbg.png" alt="lbg" class="number_frame position-absolute">
            <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light top_light position-absolute">
            <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light bottom_light position-absolute">
            <img src="../assets/image/name.png" alt="輸入分身暱稱" width="160" class="title_name mt-2">
            <div class="px-4">
              <div class="position-relative d-flex justify-content-center align-items-center">
                <input type="text" class="w-100 input_name position-relative ps-3" v-model="userName" maxlength="10" onkeyup="this.value=this.value.replace(/[^a-zA-Z\s]/g,'')">
                <div class="position-absolute w-100 d-flex justify-content-center align-items-center">
                  <div class="position-relative z-2">
                    <img src="../assets/image/input.png" alt="input">
                  </div>
                  <div class="position-absolute input_shadow">
                    <img src="../assets/image/input-lbg.png" alt="input_shadow">
                  </div>
                </div>
              </div>
              <img src="../assets/image/tip.png" alt="tip" width="200" class="ms-1 mt-2">
            </div>
            <div class="position-relative d-flex justify-content-center align-items-center">
              <img src="../assets/image/mid-light.png" alt="mid-light" class="breathe_light">
              <img src="../assets/image/mid-light.png" alt="mid-light" class="breathe_light position-absolute mid_light_reverse">
            </div>
            <div class="d-flex justify-content-around px-2">
              <div class="gender_box position-relative d-flex justify-content-center align-items-center" @click="changeGender(0)">
                <img src="../assets/image/male.png" alt="男">
                <div class="position-absolute w-100 h-100" v-if="gender == 0">
                  <img src="../assets/image/3-0.png" alt="active">
                </div>
              </div>
              <div class="gender_box position-relative d-flex justify-content-center align-items-center" @click="changeGender(1)">
                <img src="../assets/image/female.png" alt="女">
                <div class="position-absolute w-100 h-100" v-if="gender == 1">
                  <img src="../assets/image/3-0.png" alt="active">
                </div>
              </div>
            </div>
            <div class="w-100 text-end mb-2">
              <img src="../assets/image/gender.png" alt="分身性別" width="114" class="title_gender position-relative end-0">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-around position-absolute btn_area">
      <div class="btn_w btn_back" @click="goBack">
        <img src="../assets/image/btn-3-2.png" alt="返回">
      </div>
      <div class="btn_w btn_fin" @click="goFin" v-if="(userName&&gender!=null)||!confirm">
        <img src="../assets/image/btn-4.png" alt="準備開始">
      </div>
      <div class="btn_w" v-if="(!userName||gender == null)&&confirm">
        <img src="../assets/image/btn-4-n.png" alt="準備開始">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg_repeat {
    background: url('../assets/image/0-LOGO.png');
    background-size: contain;
  }
  .number_box {
    height: calc(var(--vh, 1vh) * 62);
  }
  .number_frame {
    width: 100%;
    height: 100%;
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
  .input_name {
    border: none;
    background-color: transparent;
    z-index: 3;
    color: #fff;
    font-family: adineuePROCond-R;
    letter-spacing: 2px;
    font-size: 24px;
    line-height: 32px;
    transform: translateY(2px);
  }
  .input_shadow {
    top: -1px;
    right: -2px;
  }
  .mid_light_reverse {
    rotate: 180deg;
    top: 8px;
  }
  .gender_box {
    width: 120px;
  }
  @media screen and (max-height:600px) {
    .terms_box {
      height: calc(var(--vh, 1vh) * 58);
    }
    .gender_box {
      width: 100px;
    }
  }
</style>