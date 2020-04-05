import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dva: {},
  title: 'Free Life',
  favicon: '/favicon/favicon.ico',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
      ]
    }
  ],
});
