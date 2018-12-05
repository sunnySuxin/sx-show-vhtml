<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body {
    position: fixed; // 绝对定位
    overflow: hidden; // 隐藏滚动条
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    background: url(../static/images/beiji.jpeg) no-repeat;
    background-size: cover;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
</style>
