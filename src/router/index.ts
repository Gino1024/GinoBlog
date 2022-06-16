import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: {},
    redirect: { path: '/home' },
  },
  {
    path: '/web',
    component: () => import('../views/WebLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/WebHome.vue'),
      },
      {
        path: '/self',
        name: 'self',
        component: () => import('../views/WebSelf.vue'),
      },
    ],
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
