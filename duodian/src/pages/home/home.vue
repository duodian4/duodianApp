<template>
	<div id="home">
		<h1>home</h1>
		<hr>
		<router-link to="/home/duodianmarket">duodianmarket</router-link>
		<router-link to="/home/globalselect">globalselect</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default{

}
</script>

<style>
	#home h1{
		color: #000;
		font-size: 100px;
	}
</style>