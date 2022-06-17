import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { LoadingBar } from 'quasar';

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
        meta: {
          title: '首頁',
        },
      },
      {
        path: '/self',
        name: 'self',
        component: () => import('../views/WebSelf.vue'),
        meta: {
          title: '介紹',
        },
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

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  if (to.meta.title) {
    const title: string = typeof to.meta.title === 'string' ? to.meta.title : '';
    document.title = title;
  }
  LoadingBar.stop();
  next();
});

export default router;
