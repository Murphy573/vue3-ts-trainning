<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { ref, reactive } from 'vue';

const obj = reactive({ a: 1, b: 2 });
const counter = ref<number>(1);

const addCount = () => {
  counter.value += 1;
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <section>计数：{{ counter }} <button @click="addCount">+1</button></section>
  <section>
    obj：{{ obj }} <button @click="obj.a = Math.random()">random obj.a</button>
  </section>
</template>

<style lang="less">
.aaa {
  width: 2px;
  height: 1px;
}
</style>
