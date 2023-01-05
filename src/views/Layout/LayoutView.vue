<template>
  <ElContainer class="full-container">
    <ElAside :width="asideWidth">
      <LayoutMenu :is-collapse="isCollapse" />
    </ElAside>
    <ElContainer>
      <ElHeader height="48px">
        <ElButton type="success" @click="toggleCollapse">
          {{ isCollapse ? '展开' : '收起' }}
        </ElButton>
      </ElHeader>
      <ElMain>
        <RouterView />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import LayoutMenu from './LayoutMenu.vue';
import { ref, computed } from 'vue';

const isCollapse = ref(false);

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

const asideWidth = computed<string>(() => {
  return !isCollapse.value ? '200px' : '64px';
});
</script>

<style lang="less" scoped></style>
