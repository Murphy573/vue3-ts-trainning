import type { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'inputAndOutput',
    path: 'input-output',
    component: () => import('@/views/Syntax/InputAndOutput.vue'),
  },
] as RouteRecordRaw[];
