<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute,useRouter } from "vue-router";
  const route = useRoute();
  const number = ref(20);
  const data = ref({Index: 0});

  const init = onMounted(()=>{
    if(route.params.number){
      number.value = Number(route.params.number);
    }
    getData()
  })

  const getData = ()=>{
    fetch('https://adidasznelab.com.tw:8787/POST_FinishList',{
      method: 'POST',
      headers: {
        "Content-Type": `application/json`,
      }
    }).then((res) => {
        return res.json()
    }).then((json)=>{
      data.value = json.queueList.find((res) => res.Index == number.value);
      createQR();
    })
  }

  let count = 0;

  const createQR = ()=>{
    new QRCode(document.getElementById(`qrcode`), {
      text: `https://adidasznelab.com.tw/share?time=${data.value.Timestamp}&order=${data.value.Index}&openExternalBrowser=1`,
      width: 90,
      height: 90,
      colorDark : "#000000",
      colorLight : "transparent",
      correctLevel : 0
    });
  }

  const orderNum= (num)=>{
    let result = num.toString(); 
    return result.length<4?("000"+result).substr(-4):result;
  }
</script>

<template>
  <div class="position-fixed vw_100 text-center">
    <img src="../assets/image/title.png" alt="" width="920" class="mt-4" style="transform: translateX(-18px);">
  </div>
  <div class="vw_100 vh_100 position-relative d-flex justify-content-center align-items-center">
    <img src="../assets/image/bg.jpg" alt="" class="position-absolute blue_bg">
    <div class="box_container px-4 pt-3 pb-2 d-flex justify-content-center align-items-center">
      <div class="box h-auto">
        <div class="position-absolute" style="transform: translateY(-40%);">
          <img :src="`./image/1.png`" alt="" class="">
          <div :id="`qrcode`" class="position-absolute qrcode_box"></div>
          <div class="position-absolute order_text">#{{ orderNum(data.Index) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
