import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Chat from '@/components/Chat'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]

export const router = new Router({
  mode: 'history',
  routes: routes
})
