<script setup>
  import { ref, onMounted } from 'vue';
  import { TweenMax,Power0 }  from 'gsap';
  import { useRouter } from "vue-router";
  const router = useRouter();

  const checkbox = ref(false);
  const confirm = ref(false);
  const breathe = onMounted(()=>{
    TweenMax.to(`.breathe_light`,1,{opacity: 0.3, yoyo: true, repeat: -1});
  })
  
  const goTheme = ()=>{
    TweenMax.to(`.btn_agree`,0.2,{scale: 0.8, ease: Power0.easeNone});
    TweenMax.to(`.btn_agree`,0.2,{scale: 1, delay: 0.2, ease: Power0.easeNone});
    setTimeout(()=>{
      if(checkbox.value) {
        router.replace('./theme');
      }
      else {
        confirm.value = true;
      }
    },400)
  }
</script>

<template>
  <div class="vh_100 vw_100 overflow-hidden position-relative">
    <video src="../assets/image/bg-a1.mp4" alt="" class="position-absolute bg_v" playsinline loop autoplay muted></video>
    <div class="position-relative w-100 h-100 d-flex flex-column align-items-center">
      <img src="../assets/image/0-ADIDAS.png" alt="adidas" width="80" class="mt_item">
      <img src="../assets/image/text2-2.png" alt="活動辦法" width="210" class="mt_item">
      <div class="w-100 mt_item px-5">
        <div class=" position-relative terms_box d-flex justify-content-center align-items-center">
          <div class="position-absolute white_box white_box_0"></div>
          <div class="position-absolute white_box white_box_1"></div>
          <div class="position-absolute white_box white_box_2"></div>
          <div class="position-absolute white_box white_box_3"></div>
          <div class="position-relative w-100 h-100 overflow-hidden">
            <img src="../assets/image/0-lbg.png" alt="lbg" class="terms_frame">
            <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light top_light position-absolute">
            <img src="../assets/image/light.png" alt="light" width="250" class="breathe_light bottom_light position-absolute">
          </div>
          <div class="position-absolute w-100 h-100 p-3 overflow-scroll terms_text">
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>穿上Z.N.E. 創造專屬互動光影</p>
              <div class="mb-1 step_indent">Step 1 – 現場掃描QR Code進入活動網站</div>
              <div class="mb-1 step_indent">Step 2 – 出示完成畫面進行身分驗證，並排隊等待依序入場</div>
              <div class="mb-1 step_indent">Step 3 – 於準備區配戴感應裝置</div>
              <div class="mb-1 step_indent">Step 4 – 進入Z.N.E. LAB體驗區開始體驗</div>
              <div class="mb-1 step_indent">Step 5 – 完成體驗後依工作人員指示卸下感應裝置，並掃描QR Code領取個人專屬影片</div>
              <div class="mb-2 step_indent">Step 6 – 將個人專屬影片公開上傳至個人社群平台(FB/IG/限時動態)並加入指定hashtag #adidasTaiwan #ZNELab #ZNE只管投入，即可於adidas信義品牌概念店兌換限量adidas潮流手機掛繩乙條</div>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>活動地點</p>
              <div class="mb-2">威秀影城廣場前段 (台北市信義區松壽路22號)</div>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>開放時間</p>
              <div class="mb-1">2023.09.01 (五) – 2023.09.10(日) 16:00-21:00</div>
              <div class="mb-2">平日：16:00-21:00；假日：12:00-21:00；09/01(五)自18:00起對外開放</div>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>參加本活動之照片、文字須保證無侵害第三人權利(包括但不限於智慧財產權、肖像權)及違反法令之情形，若違反上述辦法，則參與者須自負相關法律責任並賠償主辦單位所受損害。</p>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>活動參與者參加活動時之個人穿著、發表言論、活動在場行為及日後利用本活動所為任何對外發表行為即發表內容，均應符合台灣所有法律規範，不得有違法、違反公序良俗或造成活動主辦單位台灣阿迪達斯股份有限公司損害之行為，如有此等情形應自負其責。</p>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>體驗須知</p>
              <ul class="mb-2">
                <li class="mb-1">孕婦、高血壓、患心臟疾病或血壓異常者、酒醉(飲酒後)、易頭暈體質、身體不適者(含行動不便需攙扶、拐杖行走)或患有幽閉空間恐懼症，請勿參與。</li>
                <li class="mb-1">體驗此活動建議需年滿12歲以上。未滿18歲(含)以上之青少年者，建議有監護人在場陪同。</li>
                <li class="mb-1">體驗過程中須全程穿戴感應式裝置，請勿拉扯、撞擊及任意操作非工作人員指導之設備。</li>
                <li class="mb-1">現場將備有置物籃供置放隨身物品。若攜帶個人物品進入體驗區而因物品掉落造成現場毀損，參與者須負擔毀損責任。</li>
                <li class="mb-1">本設施單次使用人數：1人。</li>
                <li class="mb-1">設施使用中若有任何不適情形請立即通報，並勿自行離開設施或任意卸除穿戴感應式裝置，靜待工作人員指示排除狀況。</li>
                <li class="mb-1">本活動使用注意事項
                  <ul class="small_ul">
                    <li class="mb-1">(1) 需於身心健康情況良好之狀態下進行體驗活動。</li>
                    <li class="mb-1">(2) 活動中僅能使用主辦單位提供之設備，不得使用個人或具干擾訊號之設備且不得徒手拉扯活動道具或觸碰非工作人員指示之裝置。</li>
                    <li class="mb-1">(3) 現場活動道具用品皆為本次活動使用，如有故意毀損者，將依市價求償。</li>
                  </ul>
                </li>
                <li class="mb-1">基於安全理由，活動進行中如遇天氣不可抗拒狀況(如暴雨、強風閃電、打雷)影響活動安全，經工作人員評估基於安全考量，主辦單位有延後、終止活動等權利。</li>
              </ul>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>本活動如有未盡事宜，主辦單位擁有保留、修改、暫停及解釋活動內容之權利。</p>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>緊急避難事項</p>
            <div class="mb-2">活動進行中如活動場地內發生危害並影響活動安全情事，經現場工作人員評估基於安全考量，主辦單位有終止活動等權利，請依照工作人員指引離場：</div>
            <ul class="mb-2">
              <li class="mb-1">工作人員開啟進出口大門及逃生門，逃生門上方有設置逃生指示燈。</li>
              <li>體驗空間人員，請停止進行中的體驗事項，並依照現場工作人員指示，迅速移動至活動場地外。</li>
            </ul>
            <p class="mb-2 fw-medium"><span class="me-2">✔️</span>體驗同意</p>
            <ul class="mb-2">
              <li class="mb-1">活動參與者參加活動時之個人穿著、發表言論、活動在場行為及日後利用本活動所為任何對外發表行為即發表內容，均應符合台灣所有法律規範，不得有違法、違反公序良俗或造成活動主辦方台灣阿迪達斯股份有限公司損害之行為，如有此等情形應自負其責、與主辦單位無涉。</li>
              <li>活動參與者同意並授權主辦單位台灣阿迪達斯股份有限公司可將分身及個人肖像用於任何本活動之宣傳網站、社交媒體平臺、新聞報導，且不限地區、免版稅、可永久、公開使用(包括但不限於重製、改作、修飾編輯、公開展示、公開傳輸、公開播送等方式使用且無須再通知或經活動參與者審核同意)。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mt-2">
        <div v-if="checkbox" @click="checkbox = false">
          <img src="../assets/image/2-check.png" alt="check" width="19">
        </div>
        <div v-if="!checkbox" @click="checkbox = true">
          <img src="../assets/image/2-check-n.png" alt="check" width="19">
        </div>
        <div class="ms-2">
          <img src="../assets/image/text2-1.png" alt="我已閱讀" width="250">
        </div>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-around position-absolute btn_area">
      <div class="btn_w btn_agree" @click="goTheme" v-if="checkbox||!confirm">
        <img src="../assets/image/btn-2.png" alt="同意">
      </div>
      <div class="btn_w" v-if="!checkbox&&confirm">
        <img src="../assets/image/btn-2-n.png" alt="同意">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .terms_box {
    height: calc(var(--vh, 1vh) * 55);
  }
  .terms_frame {
    width: 100%;
    height: 100%;
  }
  .terms_text {
    color: white;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.5px;
  }
  ul {
    list-style: auto;
    padding-left: 26px;
  }
  .small_ul {
    list-style: none;
    padding-left: 13px;
    text-indent: -20px;
  }
  .step_indent {
    padding-left: 54px;
    text-indent: -54px;
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
  @media screen and (max-height:600px) {
    .terms_box {
      height: calc(var(--vh, 1vh) * 50);
    }
  }
</style>