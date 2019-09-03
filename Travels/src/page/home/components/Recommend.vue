<template>
  <div class="Recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1412/79/522273acf9c21ad5083144b4985771df.water.jpg_200x200_b604ba19.jpg",
          title: "西溪国家湿地公园·周家村",
          desc: "美若仙境，《非诚勿扰》取景地"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1901/8c/8c1d317bc954ce06a3.water.jpg_200x200_94fd133d.jpg",
          title: "宋城千古情",
          desc: "世界三大名秀之一，杭州宋城的灵魂"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1901/60/601b17dc97036e67a3.water.jpg_200x200_fc8a796c.jpg",
          title: "杭州烂苹果乐园",
          desc: "烂苹果乐园"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg",
          title: "双溪漂流",
          desc: "江南惊险漂流，水清、竹多、落差大"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1904/e3/e3df2462a8a8876fa3.water.jpg_200x200_2e9e4fe3.jpg",
          title: "杭州长乔极地海洋公园",
          desc: "海洋公园"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  padding: 0.05rem 0
  font-size: 0.3rem
  text-indent: 0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    font-size: 0.2rem
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 1
      -webkit-box-orient: vertical
    .item-desc
      line-height: 0.4rem
      color: #ccc
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 1
      -webkit-box-orient: vertical
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
      border: none
</style>