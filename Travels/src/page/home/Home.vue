<template>
  <div class="hello">
    <Header></Header>
    <Swiper :list="swiperList"></Swiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Icons from "./components/Icons";
import Recommend from "./components/Recommend";
import Weekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "hello",
  data() {
    return {};
  },
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
