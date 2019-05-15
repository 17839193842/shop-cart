import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home/home'
import Cate from '@/view/cate/cate'
import Person from '@/view/person/person'
import Cart from '@/view/cart/cart'
import Detail from '@/view/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path:'/cate',
    	name:'Cate',
    	component:Cate
    },
    {
    	path:'/person',
    	name:'Person',
    	component:Person
    },
    {
    	path:'/cart',
    	name:'Cart',
    	component:Cart
    },
    {
    	path:'/detail',
    	name:'Detail',
    	component:Detail
    }
    
  ]
})
