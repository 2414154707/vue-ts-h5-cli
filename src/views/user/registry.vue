<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formState.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="formState.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="formState.mobile" type="tel" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserManageType } from '@/interface/model/user'
import { useUserSerivice } from '@/api/user'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const userSerivice = useUserSerivice()
const formState = ref<UserManageType.UserRegistryFormState>(new UserManageType.UserRegistryFormState())
const onSubmit = async () => {
  console.log(formState.value)
  let result = await userSerivice.registry(formState.value)
  console.log(result)

  if (result.code == 1) {
    showToast({
      type: 'success',
      message: result.msg,
      onClose() {
        router.push('/user/login')
      }
    })
  } else {
    showToast({
      type: 'fail',
      message: result.msg
    })
  }
  console.log(result)
}
</script>

<style scoped lang="less"></style>
