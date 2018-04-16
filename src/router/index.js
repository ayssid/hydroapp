import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Reservoirs from '@/components/Reservoirs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reservoirs/:id',
      name: 'ReservoirsDetail',
      props: true,
      component: Reservoirs
    }
  ]
})
