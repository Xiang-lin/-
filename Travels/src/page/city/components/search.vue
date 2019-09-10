<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: "City-search"
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.search
  height: 0.62rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    padding: 0 0.1rem
    height: 0.52rem
    line-height: 0.52rem
    width: 100%
    text-align: center
    border-radius: 0.06rem
    outline: none
    color: #666
</style>