<template>
	<div id="domestic_fruit">
		<ul>
			<li v-for="item in data">
				<span @click="list_show()">{{item.catName}}</span>
				<div v-show="item.catName == childData" class="list_item">
					<ol>
						<li v-for="s in item.childCmCategories">{{s.catName}}</li>
					</ol>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default{
	name:"domestic_fruit",
	data(){
		return {
			data:[],
			isActive:true,
			childData:""
		}
	},
	created(){
		this.$http.get('../static/data/classify.json').then(res => {
			console.log(res.body.data.categoryInfo.categorys);
			this.data = res.body.data.categoryInfo.categorys;
		},err => {
			console.log(err);
		})
	},
	methods:{
		list_show(event){
			event = event || window.event;
			// this.childData = event.target.innerText;
			console.log(this.childData);
			if(this.childData == ''){
				this.childData = event.target.innerText;
			}else if(this.childData !=event.target.innerText){
				this.childData = event.target.innerText;
			}else{
				this.childData = '';
			}
			
		}
	}
}
</script>

<style scoped>
	#domestic_fruit ul>li{
		width: 2.5rem;
		text-align: center;
		line-height: 1.325rem;
	}
	#domestic_fruit ul>li>span{
		display: block;
		color: #999;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;
	}
	#domestic_fruit ul>li>.list_item li{
		color: #ff712b;
		font-size: 0.35rem;
		height: 0.625rem;
		line-height: 0.625rem;
		/*display: none;*/
	}
</style>