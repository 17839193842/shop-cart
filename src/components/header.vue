<template>
	<div>
		<!--遮罩层-->
		<div class="pagecity" v-show="showNav" @click="showModal">	
		</div>
		<!--头部-->
		<header :class="{'show':showNav}">
			<div class="header">
			  <div class="pull-left">
			  	 <span class="iconfont icon-39" @click="showModal"></span>
			  </div>
			  <h3>{{headerTitle}}</h3>
			  <div class="pull-right">
			  	<a href="">后退</a>
			  </div>
			</div>
		</header>
		<!--左侧导航-->
		<v-menu :showNav="showNav"></v-menu>
	</div>
</template>

<script>
//	import vMenu from '../components/menu.vue'
	import vMenu from './menu.vue'
	export default{
	name:'Header',
		data(){
			return {
//				showNav:false,
			};
		},
		components:{
			'v-menu':vMenu
		},
		computed:{
			showNav(){
				return this.$store.state.showNav;
			},
			headerTitle(){
				return this.$store.state.headerTitle
			}
		},
		methods:{
			showModal(){
				return this.$store.dispatch('updateShowNav');
			},
			updateHeader(name){
				return this.$store.dispatch('updateHeader',name);
			}
		},
		created(){
			
		}
}
	
</script>

<style lang="scss" scoped="scoped">
.pagecity{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background: rgba(0,0,0,.4);
	    z-index: 800;
	    width:100%;
	    height:100%;
	}
header{
		width:100%;
		height:50px;
		position:fixed;
		top:0;
		left:0;
		z-index:99;
		background:#03A9F4;
		transition:all .5s ease;
		-webkit-transition:all .5s ease;
		color:#fff;
		.header{
			width:100%;
			height:100%;
			display:flex;
			flex-direction: row;
		    justify-content: space-around;
		    align-items: center;
		    .pull-left{
		    	padding:0 0.5rem;
		    }
		    h3{
		    	flex:1;
		    }
		    .pull-right{
		    	padding:0 0.5rem;
		    	a{
		    		color:#fff;
		    	}
		    }
		}
	}
	header.show{ transform:translateX(180px);}
</style>