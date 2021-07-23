import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { store } from '../main';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login"*/ '../views/Register'),
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login"*/ '../views/Login'),
    props: true,
  },
  {
    path: '/location',
    name: 'Location',
    component: () =>
      import(/* webpackChunkName: "location"*/ '../views/Location'),
    props: true,
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "location"*/ '../views/Search'),
    props: true,
  },
  {
    path: '/question/:slug',
    name: 'Question',
    component: () =>
      import(/* webpackChunkName: "location"*/ '../views/Question'),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/review/:slug',
    name: 'Review',
    component: () =>
      import(/* webpackChunkName: "location"*/ '../views/Review'),
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/categories/:slug',
    name: 'CategoriesListing',
    props: true,
    component: () =>
      import(/* webpackChunkName: "categories"*/ '../views/CategoriesListing'),
  },
  {
    path: '/categories/:slug/:subcategoriesSlug',
    name: 'ProductListing',
    props: true,
    component: () =>
      import(/* webpackChunkName: "subcategories"*/ '../views/ProductListing'),
  },
  {
    path: '/products/:slug',
    name: 'ProductDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "subcategories"*/ '../views/ProductDetail'),
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "subcategories"*/ '../views/RecipeDetail'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.loggedIn;
  console.log(loggedIn);
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  }
  next();
});

export default router;
