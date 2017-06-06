// 1.引入Vue
import Vue from 'vue'

// 2.引入vue-router
import VueRouter from 'vue-router'

// 3.全局vue-router
Vue.use(VueRouter)

// 4.引入组件
import home from '../pages/home/home'
import classify from '../pages/classify/classify'
import member from '../pages/member/member'
import cart from '../pages/cart/cart'
import mine from '../pages/mine/mine'
import duodianmarket from '../pages/home/duodianmarket'
import globalselect from '../pages/home/globalselect'
import domestic_fruit from '../pages/classify/domestic_fruit'
import import_fruit from '../pages/classify/import_fruit'

// 5.定义路由规则
const routes = [
	{path:'',component:home,children:[{
		path:'',component:duodianmarket}]},
	{path:'/home',component:home,children:[
		{path:'',component:duodianmarket},
		{path:'duodianmarket',component:duodianmarket},
		{path:'globalselect',component:globalselect},
	]},
	{path:'/classify',component:classify,children:[
		{path:'',component:domestic_fruit},
		{path:'domestic_fruit',component:domestic_fruit},
		{path:'import_fruit',component:import_fruit},
	]},
	{path:'/member',component:member},
	{path:'/cart',component:cart},
	{path:'/mine',component:mine},
]

// 6.创建路由对象
export default new VueRouter({ routes })