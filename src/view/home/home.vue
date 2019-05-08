<template>
	<div class="home">
		<!--遮罩层-->
		<div class="pagecity" v-if="showModal" @click="showModals">
			
		</div>
		<!--头部-->
		<header :class="{'active':'showSide'}">
			<div class="header">
			  <div class="pull-left">
			  	 <span class="iconfont icon-39" @click="showSides"></span>
			  </div>
			  <h3>首页</h3>
			  <div class="pull-right">
			  	<a href="">后退</a>
			  </div>
			</div>
		</header>
		<!--左侧导航-->
		<div class="left-side" v-if="showSide" :class="{'activeSide':'showSide'}">
			<ul>
				<li>1111</li>
				<li>2222</li>
				<li>333</li>
				<li>4444</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		data(){
			return {
				showSide:false,
				showModal:false
			};
		},
		methods:{
			getData(){
				this.$http.get('../../static/data/index.json').then((response) => {
					console.log(response)
				},(error)=>{
					console.log(error)
				})
			},
			showSides(){
				this.showSide=!this.showSide;
				console.log(this.showSide)
			},
			showModals(){
				this.showModal=!this.showModal;
				this.showSide=!this.showSide;
			}
		},
		created(){
			this.getData();
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
	header{
		width:100%;
		height:50px;
		position:fixed;
		top:0;
		left:0;
		z-index:999;
		background:#03A9F4;
		transition:all .3s ease;
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
	/*.active{ transform:translateX(250px);}*/
	.left-side{
		width:180px;
		height:100%;
		position:fixed;
		top:50px;
		left:-180px;
		transition:all .3s ease;
		z-index:99;
		background:#383838;
		overflow:hidden;
		ul{
			width:100%;
			li{
				line-height:50px;
				border-bottom:1px solid #444;
				padding-left:0.5rem;
				font-size:14px;
				color:#fff;
				text-align: left;
			}
		}
		
		
  }
 .activeSide{
	left:0px;
}

	.pagecity{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background: rgba(0,0,0,.4);
	    z-index: 800;
	}
</style>