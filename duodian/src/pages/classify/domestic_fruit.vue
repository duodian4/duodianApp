<template>
	<div id="domestic_fruit">
		<ul>
			<li v-for="item in data">
				<span @click="list_show()" :class="{'sign':item.catName == childData}">{{item.catName}}</span>
				<div v-show="item.catName == childData" class="list_item">
					<ol>
						<li v-for="s in item.childCmCategories" :class="{'sign1':s.catName == childData1}" @click="change()">{{s.catName}}</li>
					</ol>
				</div>
			</li>
		</ul>
		<div class="right">
			<ul>
				<li v-for="item in data1.list">
					<img :src="item.img" alt="">
					<div class="listPro">
						<p>{{item.title}}</p>
						<p>{{item.promotionInfo.promotionDisplay}}</p>
						<p>{{item.promotionInfo.promotionPrice}}&nbsp;<s>{{item.promotionInfo.offPrice}}</s></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	name:"domestic_fruit",
	data(){
		return {
			data:[],
			isActive:false,
			childData:"",
			childData1:'',
			data1:[]
		}
	},
	created(){
		this.$http.get('../static/data/classify.json').then(res => {
			this.data = res.body.data.categoryInfo.categorys;
		},err => {
			console.log(err);
		}),
		this.$http.get('../static/data/classify_list.json').then(res => {
			console.log(res.body.data);
			this.data1 = res.body.data;
		})
	},
	methods:{
		list_show(event){
			event = event || window.event;
			console.log(event.target.nextElementSibling.firstChild.childNodes[0].innerText);
			if(this.childData == ''){
				this.childData = event.target.innerText;
				this.childData1 = event.target.nextElementSibling.firstChild.childNodes[0].innerText;
			}else if(this.childData !=event.target.innerText){
				this.childData = event.target.innerText;
				this.childData1 = event.target.nextElementSibling.firstChild.childNodes[0].innerText;
			}else{
				this.childData = '';
			}
			if(this.childData == '推荐商品'){
				this.$http.get('../static/data/classify_top.json').then(res => {
					console.log(res.body.data);
					this.data1 = res.body.data;
					console.log(this.data1);
				})
			}
		}
	}
}
</script>

<style scoped>
	.sign{

	}
	#domestic_fruit{
		position: relative;
		width: 100%;
	}
	#domestic_fruit>ul{
		margin-bottom: 100px;
		width: 2.525rem;
		height: 72%;
		position: fixed;
		overflow-y:hidden;
		overflow: auto;
		left: 0;
		top: 100px;
	}
	::-webkit-scrollbar{
		display: none;
	};
	#domestic_fruit>ul>li{
		width: 2.5rem;
		text-align: center;
		line-height: 1.325rem;
	}
	#domestic_fruit>ul>li>span{
		display: block;
		color: #999;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;
	}
	#domestic_fruit>ul>li>.sign{
		display: block;
		color: #ff712b;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;

	}
	#domestic_fruit>ul>li>.list_item li{
		color: #999;
		font-size: 0.35rem;
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.025rem dashed #ccc;
		border-right:0.025rem dashed #ccc;
	}
	#domestic_fruit>ul>li>.list_item .sign1{
		color: #ff712b;
		font-size: 0.35rem;
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.025rem dashed #ccc;
		border-right:0.025rem dashed #ccc;
	}
	#domestic_fruit>.right{
		width: 7.825rem;
		height: 78%;
		position: fixed;
		top: 2.175rem;
		right: 0;
		overflow-y: scroll;
	}
	#domestic_fruit>.right li{
		position: relative;

	}
	#domestic_fruit>.right li img{
		width: 2.5rem;
	}
	#domestic_fruit>.right li p{
		font-size: 0.35rem;
	}
	
	#domestic_fruit>.right li .listPro{
		position: absolute;
		top: 0;
		right: 0;
		width: 5.325rem;
		height: 2.5rem;
		border-bottom: 1px solid #ccc;
	}
	#domestic_fruit>.right li .listPro p:nth-child(1){
		position: absolute;
		top: 0.25rem;
		left: 0;
		/*width: 3.925rem;*/
		/*white-space: nowrap;*/
		/*overflow: hidden;*/
		/*text-overflow: ellipsis;*/
	}
	#domestic_fruit>.right li .listPro p:nth-child(2){
		position: absolute;
		top: 0.75rem;
		left: 0;
		width: 0.875rem;
		text-align: center;
		background-color: #fd7172;
		color: white;
	}
	#domestic_fruit>.right li .listPro p:nth-child(3){
		position: absolute;
		top: 1.875rem;
		left: 0;
		color: #fd7172;
	}
	#domestic_fruit>.right li .listPro p:nth-child(3) s{
		color: #999;
	}
</style>