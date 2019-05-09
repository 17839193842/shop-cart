##  1.主要使用的技术：
 vue-cli + vue2 + vue-router2 + vuex2 + axios +es6 + webpack + sass

## 2.实现的功能:

   页面的数据通过axios模拟请求本地的json文件获得
   
  vue-router2 实现个页面的相互跳转

## 3.vue-cli初始化完成后，继续新增安装以下依赖 

  `npm install axios node-sass vuex sass-loader vue-swipe --save-dev`

## 4.修改 build/webpack.base.conf.js，使其对import引入的sass支持：
    
	`{
		  test: /\.vue$/,
		  loader: 'vue-loader',
		  options: vueLoaderConfig
		}
		// 将上面的修改成下面的：
		{
		  test: /\.vue$/,
		  loader: 'vue-loader',
		  options: {
			loaders: {
			  'scss': 'vue-style-loader!css-loader!sass-loader',
			  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
			}
		  }
		}
       `
       
## axios请求数据

  在入口文件main.js中引入axios,并将其挂在全局Vue方法下:
  
  `
		// main.js
		import axios from 'axios'
		Vue.prototype.$http = axios
  `
## 把公共头部(header)和左侧(menu)组件独立

   发现一个小问题： 在把menu.vue引入到header.vue中时 他们在同一文件夹，但是这样使用竟然报错
    
   `import Menu from menu.vue`  必须使用 `import Menu from '../components/menu.vue'`
   
   目前不知道原因
  
## 父组件传值给子组件总结:

   在父组件中定义数据，调用注册使用子组件，在子组件标签上绑定v-bind:show="show"属性及所传得值,
  
  在子组件中使用porps:{ show:{type:Boolean}} 属性获取父组件传的值 
  
## 使用Vuex来存储左侧导航是否显示(showNav)和头部标题(headerTitle)的状态

  1.在src下建一个文件夹store/stroe.js及文件   内容如下代码:
   
   ` import Vue from 'vue'
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
		
		export default store `
		
	2.在入口文件main.j  引入并注入
	
	  ` import store from './store/store.js'
	   new Vue({
		  el: '#app',
		  router,
		  store,
		  components: { App },
		  template: '<App/>'
		})

	    `
  
