<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <!-- 向子组件传值 -->
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
    <!-- 子组件传值 change事件 letter的值
        向子组件传值 cities 请求到的json数据
    -->
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      // 请求的json数据
      cities: {},
      hotCities: [],
      // 创建letter Alphabet传来的值赋予,再传给List组件
      letter: ""
    };
  },
  methods: {
    // axios请求数据
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfosucc);
    },
    handleGetCityInfosucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    // 加载完成后,调用请求数据方法
    this.getCityInfo();
  }
};
</script>

<style lang='stylus' scoped></style>