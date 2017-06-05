<template>
	<div id="classify">
		<h1>classify</h1>
		<hr>
		<router-link to="/classify/domestic_fruit">国产水果</router-link>
		<router-link to="/classify/import_fruit">进口水果</router-link>
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