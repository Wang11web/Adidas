<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute,useRouter } from "vue-router";
  const route = useRoute();
  const amount = ref(20);
  const dataArray = ref([]);

  const init = onMounted(()=>{
    if(route.params.amount){
      amount.value = Number(route.params.amount);
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
      console.log(json.queueList)
      dataArray.value = json.queueList.slice(0, amount.value);
    })
  }

  let count = 0;

  const createQR = (i)=>{
    new QRCode(document.getElementById(`qrcode${i}`), {
      text: `https://adidasznelab.com.tw/share?time=${dataArray.value[i].Timestamp}&order=${dataArray.value[i].Index}&openExternalBrowser=1`,
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
    <div class="box_container px-4 pt-3 pb-2">
      <div class="box" v-for="(data, i) in dataArray" :class="{'box_white': i%3==1}">
        <div class="position-absolute" :class="{'box_odd': i%2==0,'box_even': i%2==1}">
          <img :src="`./image/${i%3}.png`" alt="" class="" @load="createQR(i)">
          <div :id="`qrcode${i}`" class="position-absolute qrcode_box"></div>
          <div class="position-absolute order_text">#{{ orderNum(data.Index) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
