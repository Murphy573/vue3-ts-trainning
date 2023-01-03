/// <reference types="vite/client" />

// BUGFIX: https://github.com/vuejs/vue-next-webpack-preview/issues/5
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
