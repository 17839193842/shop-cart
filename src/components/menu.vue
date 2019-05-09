<template>
	<div>
		<!--左侧导航-->
		<div class="left-side" :class="{'show':showNav}">
			<ul>
				<li v-for="(item,index) in navList" :key="index" @click="updateHeader(item.name)">
					<router-link :to="item.type">
					  <div>
						<span class="iconfont" :class="'icon-'+item.icon"></span>
						{{item.name}}
					  </div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Menu',
		data(){
			return {

			};
		},
		props:{
			showNav:{
				type:Boolean
			}
		},
		computed:{
			navList(){
				return this.$store.state.navList;
			}
		},
		methods:{
			updateHeader(name){
				this.$store.dispatch('updateHeader',name);
				this.$store.dispatch('updateShowNav');
			},
			
		},
		created(){
			
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
	.left-side{
		width:180px;
		height:100%;
		position:fixed;
		left:-180px;
		transition:all .5s ease;
		-webkit-transition:all .5s ease;
		z-index:999;
		background:#383838;
		overflow:hidden;
		ul{
			width:100%;
			li{
				line-height:50px;
				border-bottom:1px solid #555;
				padding-left:0.5rem;
				font-size:14px;
				color:#fff;
				text-align: left;
				span{
					margin-right:0.3rem;
				}
				a{
					color:#fff;
				}
			}
		}
		
		
  }
	.left-side.show{
	   transform:translateX(180px);
	}

</style>