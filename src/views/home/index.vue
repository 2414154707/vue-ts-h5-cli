<template>
  <div class="wrap">
    <header style="display: flex; align-items: center; justify-content: center">
      <h2>校园超市</h2>
    </header>
    <main>
      <Carousel :swiperList="swiperList" />
    </main>
    <footer>3</footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHomeSerivice } from '@/api/home'
import Carousel from '@/components/Carousel.vue'
let HomeSerivice = useHomeSerivice()
let swiperList = ref<Array<string>>([])
let goodsList = ref<Array<string>>([])
let getSwiperList = async () => {
  let resData = await HomeSerivice.getCarouselList({})
  console.log(resData, 'HomeSerivice.getCarouselList({})')
  swiperList.value = resData.result
  console.log(swiperList, 'swiperList')
}
let getGoodsList = async () => {
  let resData = await HomeSerivice.getGoodsList({})
  goodsList.value = resData.result
  console.log(resData, 'HomeSerivice.getGoodsList({})')
}
onMounted(() => {
  getSwiperList()
  getGoodsList()
})
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
.wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header,
  footer {
    width: 100%;
    height: 50px;
    background-color: green;
  }
  main {
    flex: 1;
  }
}
</style>
