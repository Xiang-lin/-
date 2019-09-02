<template>
  <div class="Icons">
    <div class="icon">
      <div class="icon-img" v-for="item in iconList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p class="icon-img-font">{{item.dsec}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          dsec: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          dsec: "故宫"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          dsec: "北京必游"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          dsec: "水上乐园"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          dsec: "一日游"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          dsec: "古北水镇"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          dsec: "动植物园"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          dsec: "奥林匹克塔"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.Icons
  overflow: hidden
  height: 0
  padding-bottom: 50%
  .icon
    display: flex
    flex-wrap: wrap
    width: 100%
    padding-bottom: 25%
    overflow: hidden
    .icon-img
      text-align: center
      padding: 2.5% 0
      width: 25%
      box-sizing: border-box
      img
        width: 50%
      .icon-img-font
        font-size: 0.25rem
        height: 0.44rem
        line-height: 0.44rem
</style>