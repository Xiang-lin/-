<template>
  <div class="hello">
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";

export default {
  name: "hello",
  data() {
    return {};
  },
  components: {
    Header,
    Swiper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
