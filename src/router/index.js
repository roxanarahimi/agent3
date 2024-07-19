import { createRouter, createWebHistory } from 'vue-router'
import Page404 from '../views/404'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact')
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import(/* webpackChunkName: "plans" */ '../views/Plans')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio')
  },
  // *********************** English **************************
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact')
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import(/* webpackChunkName: "plans" */ '../views/Plans')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio')
  },
    // ************************************** English ******************************************
  {
    path: '/en/',
    name: 'HomeEn',
    component: () => import(/* webpackChunkName: "homeEn" */ '../views/en/Home')
  },
  {
    path: '/en/about',
    name: 'AboutEn',
    component: () => import(/* webpackChunkName: "aboutEn" */ '../views/en/About')
  },
  {
    path: '/en/help',
    name: 'HelpEn',
    component: () => import(/* webpackChunkName: "helpEn" */ '../views/en/Help')
  },
  {
    path: '/en/contact',
    name: 'ContactEn',
    component: () => import(/* webpackChunkName: "plansEn" */ '../views/en/Contact')

  },
  {
    path: '/en/plans',
    name: 'PlansEn',
    component: () => import(/* webpackChunkName: "plansEn" */ '../views/en/Plans')
  },
  {
    path: '/en/portfolio',
    name: 'PortfolioEn',
    component: () => import(/* webpackChunkName: "portfolioEn" */ '../views/en/Portfolio')
  },

  // ************************************** English ******************************************

  {
    path: "/:catchAll(.*)",
    // redirect: '/', // {name: 'Home'}
    name: 'Page404',
    component: Page404,
  }
]

const router = createRouter({

 // mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
