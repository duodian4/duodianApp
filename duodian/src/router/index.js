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
import huiyuan from '../components/huiyuan'//我的会员页
import myyue from '../components/myyue'//我的余额 
import myjifeng from '../components/myjifeng'//我的积分
import mykabao from '../components/mykabao'//卡包
import myyouhui from '../components/myyouhui'//优惠券



import quanbu_mine from '../components/quanbu_mine'//全部订单的二级路由
import daizhifu_mine from '../components/daizhifu_mine'//待支付
import weiwanc_mine from '../components/weiwanc_mine'//为完成
import yiwanc_mine from '../components/yiwanc_mine'//已完成
import yiquxiao_mine from '../components/yiquxiao_mine'
import quanbuding_mine from '../components/quanbuding_mine'//全部订单


import shouhua_mine from '../components/shouhua_mine'//收货地址
import help_mine from '../components/help_mine' //帮助中心
import kefu_mine from '../components/kefu_mine'
import tiyan_mine from '../components/tiyan_mine'
import fazhan_mine from '../components/fazhan_mine'
import bangka_mine from '../components/bangka_mine'
import yaoqing_mine from '../components/yaoqing_mine'//见名知意





import equity from '../pages/member/equity'//会员权益
import activity from '../pages/member/activity'//结束活动
import download from '../pages/member/download'//下载App
import integral from '../pages/member/integral'//签到积分
import special from '../pages/member/special'//物美特惠
import purchase from '../pages/member/purchase'//积分加价购
import birthday from '../pages/member/birthday'//生日特惠
import complete from '../pages/member/complete'//我的全部权益


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
	{path:'/huiyuan',component:huiyuan},
	{path:'/myyue',component:myyue},
	{path:'/myjifeng',component:myjifeng},
	{path:'/mykabao',component:mykabao},
	{path:'/myyouhui',component:myyouhui},



	{path:'/daizhifu_mine',component:quanbuding_mine,children:[
		{path:'',component:daizhifu_mine},
		{path:'quanbu_mine',component:quanbu_mine},
		{path:'daizhifu_mine',component:daizhifu_mine},
		{path:'weiwanc_mine',component:weiwanc_mine},
		{path:'yiwanc_mine',component:yiwanc_mine},
		{path:'yiquxiao_mine',component:yiquxiao_mine}
	]},
	{path:'/weiwanc_mine',component:quanbuding_mine,children:[
		{path:'',component:weiwanc_mine},
		{path:'quanbu_mine',component:quanbu_mine},
		{path:'daizhifu_mine',component:daizhifu_mine},
		{path:'weiwanc_mine',component:weiwanc_mine},
		{path:'yiwanc_mine',component:yiwanc_mine},
		{path:'yiquxiao_mine',component:yiquxiao_mine}
	]},
	{path:'/yiwanc_mine',component:quanbuding_mine,children:[
		{path:'',component:yiwanc_mine},
		{path:'quanbu_mine',component:quanbu_mine},
		{path:'daizhifu_mine',component:daizhifu_mine},
		{path:'weiwanc_mine',component:weiwanc_mine},
		{path:'yiwanc_mine',component:yiwanc_mine},
		{path:'yiquxiao_mine',component:yiquxiao_mine}
	]},
	{path:'/quanbuding_mine',component:quanbuding_mine,children:[
		{path:'',component:quanbu_mine},
		{path:'quanbu_mine',component:quanbu_mine},
		{path:'daizhifu_mine',component:daizhifu_mine},
		{path:'weiwanc_mine',component:weiwanc_mine},
		{path:'yiwanc_mine',component:yiwanc_mine},
		


		// {path:'quanbu_mine',component:quanbu_mine}
	]},




	{path:'/shouhua_mine',component:shouhua_mine},
	{path:'/help_mine',component:help_mine},
	{path:'/kefu_mine',component:kefu_mine},
	{path:'/tiyan_mine',component:tiyan_mine},
	{path:'/fazhan_mine',component:fazhan_mine},
	{path:'/bangka_mine',component:bangka_mine},
	{path:'/yaoqing_mine',component:yaoqing_mine},
	{path:'/yiquxiao_mine',component:quanbuding_mine,children:[
			{path:'',component:yiquxiao_mine}
	]},
	{path:'/quanbu_mine',component:quanbuding_mine,children:[
			{path:'',component:quanbu_mine}
	]},
	{path:'/download',component:download},
	{path:'/integral',component:integral},
	{path:'/activity',component:activity},
	{path:'/equity',component:equity},
	{path:'/special',component:special},
	{path:'/purchase',component:purchase},
	{path:'/birthday',component:birthday},
	{path:'/complete',component:complete}
]

// 6.创建路由对象
export default new VueRouter({ routes })