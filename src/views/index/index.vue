<template>
  <div>
    <van-skeleton :loading="loading" v-if="loading">
      <template #template>
        <van-skeleton-image style="width: 100%; height: 180px" />
      </template>
    </van-skeleton>
    <Carousel :swiperList="swiperList" />
    <div class="goods-list">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-card v-for="product in goodsList" :key="product.pid" :price="product.sale_price" :desc="product.desc" :title="product.pname" :thumb="product.imgUrl">
          <template #tags>
            <van-space>
              <van-tag plain type="primary">原价：{{ product.original_price }}</van-tag>
              <van-divider />
              <van-tag plain type="primary">销量：{{ product.sales }}</van-tag>
            </van-space>
          </template>
        </van-card>
      </van-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHomeSerivice } from '@/api/home'
import Carousel from '@/components/Carousel.vue'
import GoodsList from '@/components/GoodsList.vue'
let HomeSerivice = useHomeSerivice()
let swiperList = ref<Array<string>>([])
let goodsList = ref<Array<any>>([])
let loading = ref(false)

let finished = ref(false)
let error = ref(false)
let pagesize = ref<number>(10)
let pagecount = ref<number>(1)
let getSwiperList = async () => {
  let resData = await HomeSerivice.getCarouselList({})
  swiperList.value = resData.result
}

onMounted(() => {
  getSwiperList()
})

const onLoad = async () => {
  loading.value = true
  const result = await HomeSerivice.getGoodsList({
    pagesize: pagesize.value,
    pagecount: pagecount.value
  }).catch(() => {
    error.value = true
  })
  if (result.code == 1) {
    pagecount.value = pagecount.value + 1
    goodsList.value = [...goodsList.value, ...result.result]
  } else {
    finished.value = true
  }
  loading.value = false
}
</script>

<style scoped></style>
