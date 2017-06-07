<template>
	<div id="classify">

		<router-link to="/classify/domestic_fruit">多点超市</router-link>
		<router-link to="/classify/import_fruit">全球精选</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default{

}
</script>

<style>
	#classify h1{
		color: #000;
		font-size: 100px;
	}
</style>