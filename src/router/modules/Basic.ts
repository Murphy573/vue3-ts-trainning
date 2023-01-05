import type { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login/LoginView.vue'),
  },
  {
    name: 'layout',
    path: '/layout',
    component: () => import('@/views/Layout/LayoutView.vue'),
  },
] as RouteRecordRaw[];
