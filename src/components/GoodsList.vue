<template>
  <div class="box">
    <!-- <van-card :num="1" :price="item.original" :desc="item.desc" :title="item.pname" :thumb="item.imgUrl" v-for="(item, index) in yyy.goodsList" :key="index" /> -->
    <van-card :num="1" :price="item.original" :desc="item.desc" :title="item.pname" :thumb="item.imgUrl" v-for="(item, index) in yyy.goodsList" :key="index">
      <template #tags>
        <van-tag plain type="primary">标签</van-tag>
        <van-tag plain type="primary">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
const yyy: any = defineProps({
  goodsList: {
    type: Array,
    defautl: null
  }
})
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>
