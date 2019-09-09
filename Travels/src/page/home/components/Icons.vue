<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        autopaly: false,
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='stylus' scoped>
.icons >>> .swiper-pagination-bullet-active
  background: rgba(0, 175, 190, 0.8)
  width: 6px
  height: 6px
.icons >>> .swiper-pagination-bullet
  width: 7px
  height: 7px
.icons
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .swiper-container
    overflow: visible
  .swiper-wrapper
    height: 0 !important
  .swiper-pagination
    position: absolute
    bottom: -0.45rem
    width: 100%
    text-align: center
  .swiper-icon
    width: 100%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding-top: 0.2rem
      .icon-img-content
        width: 1.1rem
        height: 1.1rem
        margin: 0 auto
        display: block
    .icon-desc
      position: absolute
      line-height: 0.44rem
      height: 0.44rem
      left: 0
      right: 0
      bottom: 0
      font-size: 0.2rem
      color: #333
      text-align: center
</style>