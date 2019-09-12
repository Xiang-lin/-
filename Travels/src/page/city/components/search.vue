<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "City-search",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = "";
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) > -1 ||
              element.name.indexOf(this.keyword) > -1
            ) {
              result.push(element);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.search
  height: 0.62rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    padding: 0 0.1rem
    height: 0.52rem
    line-height: 0.52rem
    width: 100%
    text-align: center
    border-radius: 0.06rem
    outline: none
    color: #666
.search-content
  overflow: hidden
  background: #eee
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  z-index: 12
  .search-item
    line-height: 0.62rem
    paddding-left: 0.2rem
    background: #fff
    color: #666
</style>