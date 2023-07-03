<template>
  <div>
    <van-sidebar v-model="active">
      <van-sidebar-item :title="item.pname" v-for="(item, index) in categoryList" :key="index" />
    </van-sidebar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHomeSerivice } from '@/api/home'
let homeSerivice = useHomeSerivice()
let categoryList: any = ref([])
let getcategoryList = async () => {
  let resData = await homeSerivice.getGoodsList({})
  console.log(resData)
  categoryList.value = resData.result
}
onMounted(() => {
  getcategoryList()
})
const active = ref(0)
</script>

<style scoped></style>
