// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建仓库
//创建store(仓库)，为了存放state，mutations,actions
const store = new Vuex.Store({
	state:{//共享的数据
		money:0
	},
	mutations:{//修改数据的唯一途径
		ADD_MONEY(state,price){
			state.money += price;
		},
		REDUCE_MONEY(state,price){
			state.money -= price;
		}
	},
	actions:{

	}
})

// 将路由引入到router变量中
import router from './router'
//引入vue-resource
import VueResource from 'vue-resource'
//全局安装
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
