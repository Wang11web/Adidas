<script setup>
  import { ref,onMounted } from 'vue'
  import { useRoute,useRouter } from "vue-router";
  const route = useRoute();
  const amount = ref(20);

  const init = onMounted(()=>{
    console.log(route.params.amount)
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
      console.log(json)
    })
  }
</script>

<template>
  
</template>
