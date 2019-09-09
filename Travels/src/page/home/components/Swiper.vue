<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide class="swiper-img" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets
  bottom: 30px
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 26.6%
  .swiper-img
    width: 100%
    img
      width: 100%
      height: 100%
</style>