<template>
	<div id="import_fruit">
		<ul>
					<li v-for="item,index in data">
						<span @click="list_show(index)" :class="{'sign':index == currentIndex}">{{item.catName}}</span>
						<div v-show="item.catName == childData" class="list_item">
							<ol>
								<li v-for="s in item.childCmCategories" :class="{'sign1':s.catName == childData1}" @click="change($event)">{{s.catName}}</li>
							</ol>
						</div>
					</li>
				</ul>
				<div class="right">
					<ul>
						<li v-for="item in data1.list">
							<router-link to="/details" tag="span">
								<img :src="item.img" alt="">
							</router-link>
							<div class="listPro">
								<p>{{item.title}}</p>
								<p>{{item.promotionInfo.promotionDisplay}}</p>
								<p>{{item.promotionInfo.promotionPrice}}&nbsp;<s>{{item.promotionInfo.offPrice}}</s></p>
								<div class="add_btn">
									<i @click="addItem()"></i>
								</div>
							</div>
						</li>
					</ul>
				</div>
	</div>
</template>

<script type="text/javascript">
export default{
	name:"import_fruit",
	data(){
		return {
			data:[],
			isActive:false,
			childData:"",
			childData1:'',
			data1:[],
			currentIndex:1
		}
	},
	created(){
		this.$http.get('../static/data/classify.json').then(res => {
			this.data = res.body.data.categoryInfo.categorys;
			console.log(res);
		},err => {
			console.log(err);
		}),
		this.$http.get('../static/data/classify_list.json').then(res => {
			this.data1 = res.body.data;
			console.log(this.data1);
		})
	},
	methods:{
		list_show(index){
			this.currentIndex = index;
			event = event || window.event;
			console.log(this);
			if(this.childData == ''){
				this.childData = event.target.innerText;
				this.childData1 = event.target.nextElementSibling.firstChild.childNodes[0].innerText;
			}else if(this.childData !=event.target.innerText){
				this.childData = event.target.innerText;
				this.childData1 = event.target.nextElementSibling.firstChild.childNodes[0].innerText;
			}else{
				this.childData = '';
				this.childData1 = event.target.nextElementSibling.firstChild.childNodes[0].innerText;
			}
			if(this.childData == '推荐商品'){
				this.$http.get('../static/data/classify_top.json').then(res => {
					
					this.data1 = res.body.data;
					// console.log(this.data1);
				})
			}
		},
		change(){
			console.log(event.currentTarget.innerText);
			this.childData1 = event.currentTarget.innerText;
		},
		addItem(){
			console.log(this);
		}
	}
}
</script>

<style scoped>
	#import_fruit{
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-top: 1px solid #ccc;
	}
	#import_fruit>ul{
		margin-bottom: 100px;
		width: 2.525rem;
		height: 87%;
		position: fixed;
		overflow-y:hidden;
		overflow: auto;
		left: 0;
		top: 1.1rem;
	}
	::-webkit-scrollbar{
		display: none;
	};
	#import_fruit>ul>li{
		width: 2.5rem;
		text-align: center;
		line-height: 1.325rem;
	}
	#import_fruit>ul>li>span{
		display: block;
		color: #999;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;
		background-color: #f6f6f6;
	}
	#import_fruit>ul>li>.sign2{
		display: block;
		color: #ff712b;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;
		background-color: white;
	}
	#import_fruit>ul>li>.sign{
		display: block;
		color: #ff712b;
		font-size: 0.4rem;
		text-align: center;
		width: 2.5rem;
		border-bottom:0.025rem solid #ccc;
		border-right:0.025rem solid #ccc;
		background-color: white;
	}
	#import_fruit>ul>li>.list_item li{
		color: #999;
		font-size: 0.35rem;
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.025rem dashed #ccc;
		border-right:0.025rem solid #ccc;
	}
	#import_fruit>ul>li>.list_item .sign1{
		color: #ff712b;
		font-size: 0.35rem;
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.025rem dashed #ccc;
		border-right:none;
	}
	#import_fruit>.right{
		width: 7.825rem;
		height: 87%;
		position: fixed;
		top: 1.1rem;
		right: 0;
		overflow-y: scroll;
	}
	#import_fruit>.right li{
		position: relative;

	}
	#import_fruit>.right li img{
		width: 2.5rem;
	}
	#import_fruit>.right li p{
		font-size: 0.35rem;
	}
	
	#import_fruit>.right li .listPro{
		position: absolute;
		top: 0;
		right: 0;
		width: 5.325rem;
		height: 2.5rem;
		border-bottom: 1px solid #ccc;
	}

	.add_btn{
		position: absolute;
		right: 10px;
		top: 49px;
	}
	.add_btn i{
		display: inline-block;
		width: 30px;
		height: 30px;
		background:url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136) no-repeat;
		background-size: 10.0rem auto;
		background-position: -3.75rem -3.75rem;
	}

	#import_fruit>.right li .listPro p:nth-child(1){
		position: absolute;
		top: 0.25rem;
		left: 0;
		/*width: 3.925rem;*/
		/*white-space: nowrap;*/
		/*overflow: hidden;*/
		/*text-overflow: ellipsis;*/
	}
	#import_fruit>.right li .listPro p:nth-child(2){
		position: absolute;
		top: 0.75rem;
		left: 0;
		width: 0.875rem;
		text-align: center;
		background-color: #fd7172;
		color: white;
	}
	#import_fruit>.right li .listPro p:nth-child(3){
		position: absolute;
		top: 1.875rem;
		left: 0;
		color: #fd7172;
	}
	#import_fruit>.right li .listPro p:nth-child(3) s{
		color: #999;
	}
</style>