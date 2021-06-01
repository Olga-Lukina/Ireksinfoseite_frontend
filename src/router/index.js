import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

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
    path: '/products/:productSlug',
    name: 'ProductDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "subcategories"*/ '../views/ProductDetail'),
  },
  {
    path: '/recipes/:recipeSlug',
    name: 'RecipeDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "subcategories"*/ '../views/RecipeDetail'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "login"*/ '../views/Dashboard'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
