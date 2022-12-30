<template>
  <div class="about ad">
    <h1>使用了全局less变量</h1>
  </div>
</template>

<style lang="less" scoped>
.about {
  display: inline-flex;
  align-items: center;
  min-height: 100vh;
  color: @background;
  opacity: 1;
  transition: all 0.01s;
  object-fit: none;
}
</style>
