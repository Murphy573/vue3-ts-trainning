<template>
  <ElContainer class="full-container">
    <ElAside width="200px">
      <LayoutMenu />
    </ElAside>
    <ElContainer>
      <ElHeader height="48px">Header</ElHeader>
      <ElMain>
        <RouterView />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import LayoutMenu from './LayoutMenu.vue';
</script>

<style lang="less" scoped></style>
