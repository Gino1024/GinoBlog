import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { LoadingBar } from 'quasar';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: {},
    redirect: { path: '/AboutMe' },
  },
  {
    path: '/web',
    component: () => import('../views/WebLayout.vue'),
    children: [
      {
        path: '/aboutme',
        name: 'aboutme',
        component: () => import('../views/WebHomeView.vue'),
        meta: {
          title: 'Gino\'s AboutMe',
        },
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/WebArticleView.vue'),
        meta: {
          title: 'Gino\'s Blog',
        },
      },
    ],
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
  LoadingBar.setDefaults({
    color: 'red-5',
    size: '5px',
    position: 'top',
  });

  LoadingBar.start();
  if (to.meta.title) {
    const title: string = typeof to.meta.title === 'string' ? to.meta.title : '';
    document.title = title;
  }
  LoadingBar.stop();
  next();
});

export default router;
