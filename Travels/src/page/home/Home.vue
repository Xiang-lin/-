<template>
  <div class="hello">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Icons from "./components/Icons";
export default {
  name: "hello",
  data() {
    return {};
  },
  components: {
    Header,
    Swiper,
    Icons
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
