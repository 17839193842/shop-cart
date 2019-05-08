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
