import type { RouteRecordRaw } from 'vue-router';
import Syntax from './Syntax';

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
    children: [...Syntax],
  },
] as RouteRecordRaw[];
