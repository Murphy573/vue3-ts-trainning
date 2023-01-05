<template>
  <div class="login full-container">
    <ElButton @click="jumpTo" size="large">登录</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const jumpTo = () => {
  router.replace({
    name: 'layout',
  });
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
