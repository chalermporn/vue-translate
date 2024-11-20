import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:lang(en|th)?', // Optional language segment
    component: () => import('../layouts/MainLayout.vue'), // Main layout component
    children: [
      {
        path: '', // Path relative to the language
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'about', // Path relative to the language
        name: 'AboutView',
        component: () => import('../views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)', // Redirect unknown paths
    redirect: '/en',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Ensure default language if none is provided
router.beforeEach((to, _, next) => {
  const lang = to.params.lang as string;
  console.log("lang: ",lang);
  if (!lang) {
    return next({ path: `/en${to.path}` });
  }
  next();
});

export default router;
