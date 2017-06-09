<template>
	<div id="classify">
		<router-link to="/classify/domestic_fruit">多点超市</router-link>
		<router-link to="/classify/import_fruit">全球精选</router-link>
		<router-view></router-view>
		<!-- <sou-suo></sou-suo>	 -->
	</div>
</template>

<script>
import SouSuo from './sousuo'

export default{
	name:'classify',
	components:{
		SouSuo
	}
}
</script>

<style>
	#classify {
		margin-top: 0.25rem;
		width: 100%;
		overflow:hidden;
	}
	#classify a:first-child{
		float: left;
		width: 3.75rem;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #fff;
		font-size: 0.4rem;
		border-radius: 5px 0 0 5px;
		background-color: #ff712b;
		text-align: center;
		margin-left: 14%;
	}
	#classify a:nth-child(2){
		float: left;
		width: 3.75rem;
		height: 0.75rem;
		line-height: 0.75rem;
		border-radius: 0 5px 5px 0;
		text-align: center;
		color: #ff712b;
		font-size: 0.4rem;
		background-color: #fff;
		border:1px solid #ff712b;
	}
</style>