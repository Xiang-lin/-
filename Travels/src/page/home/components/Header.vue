<template>
  <div class="headers">
    <div class="header-left">
      <div class="iconfont back">&#xe663;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search">&#xe62b;</span>
      请输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "headers",
  props: {
    city: String
  },
  methods: {},
  component: {}
};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.headers
  background: $bgColor
  display: flex
  height: $headerHeight
  font-size: 0.3rem
  line-height: $headerHeight
  color: #fff
  .header-left
    width: 0.64rem
    float: left
    .back
      font-size: 0.4rem
      text-align: center
  .header-input
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left: 0.2rem
    background: #fff
    border-radius: 0.1rem
    color: #ccc
    .search
      font-size: 0.4rem
  .header-right
    width: 1.24rem
    text-align: center
    float: right
    color: #fff
    .arrow-icon
      font-size: 0.24rem
      margin-left: -0.04rem
</style>