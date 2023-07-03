<template>
  <div class="wrap">
    <header style="display: flex; align-items: center; justify-content: center">
      <h2>校园超市</h2>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <van-tabbar route>
        <van-tabbar-item replace to="/home/index" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/home/about" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/home/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/home/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

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
    overflow: auto;
  }
}
</style>
