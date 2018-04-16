import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/User/Signin'
import Reservoir from '@/components/Reservoir'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/reservoirs/:id',
      name: 'ReservoirsDetail',
      props: true,
      component: Reservoir,
      beforeEnter: AuthGuard
    }
  ]
})
