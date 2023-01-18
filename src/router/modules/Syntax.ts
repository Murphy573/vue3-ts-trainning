import type { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'inputAndOutput',
    path: 'input-Output',
    component: () => import('@/views/Syntax/InputAndOutput.vue'),
  },
] as RouteRecordRaw[];
