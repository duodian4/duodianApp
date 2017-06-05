<template>
	<div id="domestic_fruit">
		<h1>domestic_fruit</h1>
	</div>
</template>

<script type="text/javascript">
export default{
	name:"domestic_fruit",
	data(){
		return {
			data:[]
		}
	},
	created(){
		this.$http.get('api').then(res => {
			console.log(res.body.data);
		},err => {
			console.log(err);
		})
	}
}
</script>

<style>
	#domestic_fruit h1{
		color: #ccc;
		font-size: 50px;
	}
</style>