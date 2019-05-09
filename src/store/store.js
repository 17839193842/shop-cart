import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		showNav:false,
		navList:[{name:'首页',type:'home',icon:'travel'},
		         {name:'分类',type:'cate',icon:'cartoon'},
		         {name:'个人中心',type:'person',icon:'persons'},
		         {name:'购物车',type:'cart',icon:'animal'}
		],
		headerTitle:'首页'
	},
	getters:{
		
	},
	mutations:{
		//控制左侧导航是否显示
		updateShow(state){
			state.showNav=!state.showNav;
		},
		updateHeaderTitle(state,title){
			state.headerTitle=title;
		}
	},
	actions:{
	   updateShowNav({commit}){
	   	 commit('updateShow');
	   },
	   updateHeader({commit},title){
	   	commit('updateHeaderTitle',title);
	   }
	}
})

export default store