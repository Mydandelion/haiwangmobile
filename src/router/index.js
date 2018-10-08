import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/menu'
import login from '@/pages/login/login'
import SurgeryOrder from '@/pages/orders/SurgeryOrder'
import SurgeryRecycle from '@/pages/orders/SurgeryRecycle'
import LogisticsDistribution from '@/pages/Logistics/LogisticsDistribution'
import Partner from '@/pages/Partner/Partner'
import OrderDetail from '@/pages/orders/OrderDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/SurgeryOrder',
      name: 'SurgeryOrder',
      component: SurgeryOrder
    },
    {
      path: '/SurgeryRecycle',
      name: SurgeryRecycle,
      component: SurgeryRecycle
    },
    {
      path: '/OrderDetail',
      name: OrderDetail,
      component: OrderDetail
    },
    {
      path: '/LogisticsDistribution',
      name: LogisticsDistribution,
      component: LogisticsDistribution
    },
    {
      path: '/Partner',
      name: Partner,
      component: Partner
    }
  ]
})

export default router
