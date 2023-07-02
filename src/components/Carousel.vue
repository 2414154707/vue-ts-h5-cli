<template>
  <div class="box">
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiperList" :key="index"><img :src="item.img" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
const yyy = defineProps({
  swiperList: {
    type: Array,
    defautl: ''
  }
})
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  .swiper {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 150px;
    }
  }
}
</style>
