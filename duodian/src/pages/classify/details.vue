<template>
	<div>
		<h1>{{data1}}</h1>
		<h2>{{data1}}</h2>
	</div>
</template>

<script>
	export default{
		name:'details',
		data(){
			return {
				data1:[]
			}
		},
		created(){
			this.$http.get('../static/data/classify_list.json').then( res => {
				console.log(res);
				this.data1 = res.body.data;
			})
		}
	}
</script>