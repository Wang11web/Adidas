<script setup>
  import { ref, onMounted } from 'vue';
  import { TweenMax,Power0 }  from 'gsap';
  import { useRouter } from "vue-router";
  const router = useRouter();

  const title_1 = ref('adidas E.Z.N. LAB');
  const title_2 = ref('Z.N.E.');
  let zneArr = ['N.E.Z.','E.Z.N.','N.E.Z.','E.Z.N.','Z.E.Z.','Z.Z.N.','Z.E.Z.','Z.Z.N.','Z.E.Z.','Z.Z.N.','Z.N.Z.','Z.N.N.','Z.N.Z.','Z.N.N.','Z.N.Z.','Z.N.N.','Z.N.E.','Z.N.N.','Z.N.E.'];
  let count = 0;
  const skew = ref(false)

  const ani = onMounted(()=>{
    TweenMax.to(`.title_1`,0.3,{opacity: 1, delay: 0.2});
    TweenMax.to(`.title_2`,0.3,{opacity: 1, delay: 0.5});
    TweenMax.to(`.title_3`,0.3,{opacity: 1, delay: 0.8});
    TweenMax.to(`.text_slogan`,0.5,{opacity: 1, delay: 0.8});
    TweenMax.to(`.text_slogan_text`,0.5,{opacity: 1, delay: 1.5});
    TweenMax.to(`.btn_w`,0.5,{opacity: 1, delay: 2.3});
    setTimeout(()=>{
      runAni()
    },400)
    setTimeout(()=>{
      skew.value = true;
    },1300)
  })

  const runAni = () => {
    setTimeout(()=>{
      if(count<19) {
        title_1.value = `adidas ${zneArr[count]} LAB`;
        title_2.value = `${zneArr[count]}`;
        count++;
        runAni();
      }
    }, 50)
  }

  const goTerms = ()=>{
    TweenMax.to(`.btn_terms`,0.2,{scale: 0.8, ease: Power0.easeNone});
    TweenMax.to(`.btn_terms`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
    setTimeout(()=>{
      router.replace('./terms');
    },400)
  }
</script>

<template>
  <div class="vh_100 vw_100 overflow-hidden position-relative">
    <img src="../assets/image/0-bg.jpg" alt="" class="position-absolute blue_bg">
    <img src="../assets/image/0-LOGO.png" alt="" class="position-absolute bg_v">
    <div class="position-relative w-100 h-100 d-flex flex-column align-items-center">
      <img src="../assets/image/0-ADIDAS.png" alt="adidas" width="80" class="mt_item">
      <div class="d-flex align-items-center mt_item position-relative title_1">
        <img src="../assets/image/text1-4.png" alt="歡迎進入" height="25">
        <div class="title_text ms-1">{{ title_1 }}</div>
      </div>
      <div class="d-flex align-items-center position-relative title_2">
        <img src="../assets/image/text1-3.png" alt="現在邀請你體驗穿上" height="25">
        <div class="title_text ms-1">{{ title_2 }}</div>
      </div>
      <div class="d-flex align-items-center position-relative title_3">
        <img src="../assets/image/text1-1.png" alt="只有專注、享受當下的時刻" height="25">
      </div>
      <div class="position-relative d-flex justify-content-center align-items-center particle_box">
        <img src="../assets/image/Home_Particle.gif" alt="Particle" class="position-absolute">
        <img src="../assets/image/Home_T.png" alt="t" class="position-relative">
        <div class="position-absolute d-flex flex-column text_slogan_box">
          <div class="text_slogan" :class="{'text_slogan_skew': skew}">IN THE MOMENT</div>
          <img class="text_slogan_text" src="../assets/image/text1-2.png" alt="只管投入" width="270">
        </div>
      </div>
    </div>
    
    <div class="w-100 d-flex justify-content-around position-absolute btn_area">
      <div class="btn_w btn_terms" @click="goTerms">
        <img src="../assets/image/btn-1.png" alt="開始體驗">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg_repeat {
    background: url('../assets/image/0-LOGO.png');
    background-size: contain;
  }
  .title_text {
    font-size: 30px;
    color: #FFF;
    transform: skew(-20deg) translateY(-1px);
    font-family: adineuePROCond-B;
  }
  .title_1 {
    right: 20px;
    /* margin-bottom: 8px; */
    opacity: 0;
  }
  .title_2 {
    left: 20px;
    margin-bottom: 8px;
    opacity: 0;
  }
  .title_3 {
    right: 10px;
    opacity: 0;
  }
  .btn_w {
    width: 200px;
    opacity: 0;
  }
  .text_slogan_box {
    bottom: 45px;
  }
  .text_slogan {
    font-size: 36px;
    color: #FFF;
    line-height: 22px;
    margin-left: 20px;
    font-family: adineuePROCond-B;
    opacity: 0;
    /* text-shadow: 0 0 10px rgba(37, 67, 93, 0.5); */
    transition: 0.5s;
  }
  .text_slogan_skew {
    transform: skew(-20deg);
    text-shadow: 0 0 10px rgba(37, 67, 93, 0.3);
  }
  .text_slogan_text {
    opacity: 0;
  }
  @media screen and (max-height:600px) {
    .title_text {
      line-height: 25px;
      margin-bottom: 8px;
      transform: skew(-20deg) translateY(2px);
    }
    .particle_box {
      width: 80vw;
    }
  }
</style>