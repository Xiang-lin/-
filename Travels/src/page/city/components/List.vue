<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <!-- 父组件axios得到json值,props接收后,直接调用 -->
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市名称
        父组件axios得到json值,props接收后,直接调用 
      -->

      <div class="area" v-for="(itme,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in itme"
            :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import betterScoll from "better-scroll";
export default {
  name: "CityList",
  props: {
    // 接收json值
    hotCities: Array,
    cities: Object,
    // 接收兄弟组件的传值,通过父组件传来的letter值
    letter: String
  },
  data() {
    return {};
  },
  // 使用better插件
  mounted() {
    this.scroll = new betterScoll(this.$refs.wrapper);
  },
  // 监听从父组件接受的letter的值得变化
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    font-size: 0.26rem
    background: #eee
    padding-left: 0.2rem
    color: #666
.button-list
  overflow: hidden
  padding: 0.1rem 0.6rem 0.1rem 0.1rem
.button-wrapper
  float: left
  width: 33.33%
  .button
    text-align: center
    padding: 0.1rem 0
    margin: 0.1rem
    border: 0.02rem solid #ccc
    border-radius: 0.06rem
.item-list
  .item
    line-height: 0.76rem
    padding-left: 0.2rem
</style>