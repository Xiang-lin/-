<template>
  <div class="hello">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Icons from "./components/Icons";
import Recommend from "./components/Recommend";
import Weekend from "./components/Weekend";
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
