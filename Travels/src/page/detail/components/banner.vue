<template>
  <div class="banner">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg"
    />
    <div class="banner-info">
      <div class="banner-title">奥林匹克塔</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe722;</span>
        8
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBanner",
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      height: 0.32rem
      line-height: 0.32rem
      font-size: 0.24rem
      border-radius: 0.2rem
      background: rgba(0, 0, 0, 0.8)
      margin-top: 0.14rem
      padding: 0 0.4rem
      .banner-icon
        font-size: 0.24rem
</style>