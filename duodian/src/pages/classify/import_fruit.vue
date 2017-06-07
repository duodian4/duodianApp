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
		this.$http.get('../static/data/classify.json').then(res => {
			console.log(res);
			
		})
	}
}
</script>

<style scoped>
	#import_fruit h1{
		color: #ccc;
		font-size: 50px;
	}
</style>