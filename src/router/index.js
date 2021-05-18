
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login"*/  "../views/Login"),
    props: true
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "location"*/ "../views/Location"),
    props: true
  },
  {
    path: "/categories/:slug",
    name: "CategoriesListing",
    props: true,
    component: () =>
        import( /* webpackChunkName: "categories"*/ "../views/CategoriesListing"),
    children: [
      {
        path: ":subcategoriesSlug",
        name: "SubCategoriesListing",
        props: true,
        component: () =>
            import(/* webpackChunkName: "subcategories"*/ "../views/SubCategoriesListing"),
              }, {
                path: ":productlistingSlug",
                name: "ProductListing",
                component: () =>
                    import(/* webpackChunkName: "productlisting"*/ "../views/ProductListing"),
                        children: [
                          {
                            path: ":productdetailSlug",
                            name: "ProductDetail",
                            props: true,
                            component: () =>
                                import(/* webpackChunkName: "productdetail"*/ "../views/ProductDetail"),

                          }
        ]
      }
    ]
  }]


  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  
 
