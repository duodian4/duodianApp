<template>
	<div id="import_fruit">
		<h1>import_fruit</h1>
	</div>
</template>

<script type="text/javascript">
export default{
	name:"import_fruit",
	data(){
		return {
			data:[]
		}
	},
	created(){
		this.$http.get('api1').then(res => {
			console.log(res.body.data);
		})
	}
}
</script>

<style>
	#import_fruit h1{
		color: #ccc;
		font-size: 50px;
	}
</style>