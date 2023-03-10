import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue';
import router from './router';

import './styles/index.less';

// const a: string = 1;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
// 记载element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
