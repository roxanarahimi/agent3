import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Help from '../views/Help.vue'
import Contact from '../views/Contact.vue'
import Plans from '../views/Plans.vue'
import Samples from '../views/Samples.vue'
import Page404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
  },
  {
    path: '/samples',
    name: 'Samples',
    component: Samples,
  },
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
