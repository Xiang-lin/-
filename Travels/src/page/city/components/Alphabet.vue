<template>
  <ul class="list">
    <!-- 自定义事件
      click 点击字母出现城市
      touchstart 手指开始移动 touch 为 true
      touchmove 手指移动过程
      touchend 手指结束移动或手指按住没放开 touch 为false
    -->
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    //   接受cities City组件中请求axios直接可使用json数据
    cities: Object
  },
  data() {
    return {
      // 触摸判断
      touchStatus: false,
      //   距离盒子顶部高度
      startY: 0,
      //   限流定时器
      timer: null
    };
  },
  updated() {
    //   当数据更新时,更新距离盒子高度
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    //   当letters改变是,返回给父组件新的letters
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    //   点击字母,判断点击的字母,返回给父组件
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    // 手指触摸移动开始,touchStatus为true
    handleTouchStart() {
      this.touchStatus = true;
    },
    // 手指触摸移动中,设置timer如果有则重新开始,没有则创建定时器
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 每16毫秒动用一次,节约性能
        this.timer = setTimeout(() => {
          // 计算当前位置=触摸位置-顶部导航栏高度
          const touchY = e.touches[0].clientY - 79;
          //   计算当前触摸字符位置=当前位置-盒子顶部高度/字母自身高度
          const index = Math.floor((touchY - this.startY) / 20);
          //   排除条件触摸位置只有在字母上才传值给父组件
          if (index >= 0 && index < this.letters.length) {
            //   传给父组件当前字母的下标,获得字母
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  right: 0
  top: 1.58rem
  bottom: 0
  width: 0.4rem
  .item
    texgt-align: center
    line-height: 0.44rem
    color: $bgColor
</style>


