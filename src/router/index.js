import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/views/Table'
import CurrensPage from '@/views/CurrensPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Table
    },
    {
      path: '/:id',
      name: 'currens',
      component: CurrensPage,
      props: (route) => ({ id: route.query.id }) ,
    }
  ]
})
