<template>
<!--  -->
<div id="duodianmarket">
	<div class="continer">
		<img src="https://img.dmallcdn.com/mIndex/201705/2f03ba3d-e807-4b22-b2e3-64a6518dec2e_750H" alt="">
	</div>
	<!-- 早晚市 -->
	<ul class="slider_list">
		<li v-for="item in dataBanner">
			<img :src="item.imageUrl" alt="">
			<p>{{ item.remark }}</p>
		</li>	
	</ul>
	<!-- 精选推荐 -->
	<div class="recommend">
		<img src="https://img.dmallcdn.com/mIndex/201705/93c4fa6c-8ec1-4d8f-9272-7fc8213555cb_750H" alt="">
	</div>
	<div class="fresh">
		<a href="" class="jijie">
			<img src="https://img.dmallcdn.com/mIndex/201705/deb2ab8b-90f9-4c77-8946-f09ef2a95cee_480x480H" alt="">
		</a>
		<a href="" class="sunday">
			<img src="https://img.dmallcdn.com/mIndex/201705/c58a62be-1f69-43bb-abf7-8bbf08a097fa_480x480H" alt="">
		</a><a href="" class="happy">
			<img src="https://img.dmallcdn.com/mIndex/201705/c0272a88-8c2f-40a7-9dfb-e7aa44bf8c77_480x480H" alt="">
		</a>
	</div>
	<div class="optimization">
		<img src="https://img.dmallcdn.com/mIndex/201705/b00ea781-9320-4282-b9a3-422b06837a5c_750H" alt="">
	</div>
	<!-- 超市优选 -->
	<ul class="optimization_list">
		<li v-for="item in xianBanner"><a href=""><img :src="item.imageUrl" alt=""></a></li>
		<li v-for="item in youxuandata"><a href=""><img :src="item.imageUrl" alt=""></a></li>
	</ul>
	<!-- 产品列表 -->
	<ol class="produce_list">
		<li>
			<div class="greens"><img src="https://img.dmallcdn.com/mIndex/201705/efa20b1e-88a2-46f9-94aa-2e8abe83e0cc_750H" alt=""></div>
			<ul class="greens_list">
				<li v-for="item in produceData">
					<img :src="item.imageUrl" alt="">
					<div class="mouldnews">
						<span class="special_price">特价</span>
						<p>{{ item.data.name }}</p>
						<div class="price">
							<span class="before_price">￥<em>{{ item.data.price }}</em></span>
							<span class="now_price">￥{{ item.data.promotionPrice }}</span>
							<div class="add_btn">
								<i></i>
							</div>
						</div>						
					</div>					
				</li>
			</ul>
		</li>
	</ol>
</div>
</template>

<script type="text/javascript">
export default{
	name:"duodianmarket", 
	data(){
		return {
			dataList:[],
			dataBanner:[],
			xianBanner:[],
			youxuandata:[],
			produceData:[]

		}
	},
	created(){
		this.$http.get('../static/data/duoDian.json').then(res => {
			// console.log(res.data.data.pageModules[8].dataList[0].imageUrl);
			this.dataList = res.data.data.pageModules,
			this.dataBanner = res.data.data.pageModules[2].dataList,//早晚市
			this.xianBanner = res.data.data.pageModules[6].dataList,//超市优选上
			this.youxuandata = res.data.data.pageModules[7].dataList,//超市优选下
			this.produceData = res.data.data.pageModules[9].dataList

		})
	}
}
</script>

<style scoped>
#duodianmarket{
	position: fixed;
	top: 2.225rem;
	left: 0;
	right: 0;
	bottom: 50px;
	overflow-y: scroll;
}
::-webkit-scrollbar{
	display: none;
}
.continer{
	width: 100%;
}
.continer img{
	display: block;
	width: 100%;
	height: 4.14rem;
}
/*早晚市*/
.slider_list{
	width: 100%;
	border-top: 10px solid #f0f0f0;
	border-bottom: 10px solid #f0f0f0;
	padding-bottom: 0.175rem;
	display: flex;
	overflow: hidden;
}
.slider_list li{
	width: 20%;
	padding-bottom: 0.125rem;
	padding-top: 0.125rem;
	flex: 1;
}
.slider_list li img{
	display: block;
	height: 1.38rem;
}
.slider_list li p{
	line-height: 0.4rem;
	text-align: center;
	font-size: 0.3rem;
	color: #888;
}
/*精选推荐*/
.recommend{
	width: 100%;
}
.recommend img{
	width: 100%;
	display: block;
}
.fresh{
	width: 100%;
	overflow: hidden;
}
.fresh a{
	display: inherit;
	width: 50%;
}
.fresh a img{
	display: block;
	width: 100%;
}
.jijie{
	float: left;
	border-right: 1px solid #fff;
	box-sizing: border-box;
}
.jijie img{
	height: 6.072rem;
}
.sunday{
	float: right;
	height: 3.036rem;
}
.happy{
	float: right;
	height: 3.036rem;
}
/*超市优选*/
.optimization{
	width: 100%;
	border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}
.optimization img{
	width: 100%;
	display: block;
}
.optimization_list{
	width: 100%;
	overflow: hidden;
}
.optimization_list li{
	width: 33.33%;
	float: left;
}
.optimization_list li img{
	display: block;
	width: 100%;
}
.produce_list{
	width: 100%;
}
/*健康蔬菜*/
.greens{
	width: 100%;
}
.greens img{
	width: 100%;
	display: block;
}
.greens_list{
	width: 100%;
}
.greens_list li{
	position: relative;	
	width: 33.33%;
	float: left;
	box-sizing: border-box;
	padding: 0.25rem 0.125rem;
	border-right: 1px solid #f0f0f0;
	border-bottom: 1px solid #f0f0f0;
}
.greens_list li img{
	width: 100%;
	display: block;
}
.mouldnews{
	position: relative;
	padding: 0.55rem 0.125rem 0;
}
.special_price{
	line-height: 15.6px;
	display: inline-block;
	padding: 0 0.15rem;
	margin: 0 1px;
	background: #ff6161;
	font-size: 0.25rem;
	color: #fff;
	-webkit-text-size-adjust:none;
	position: absolute;
	top: 0;
	left: 0.1rem;
}
.mouldnews p{
	text-align: left;
	height: 0.9rem;
	line-height: 0.45rem;
	color: #21292b;
	margin-bottom: 0.25rem;
	font-size: 0.35rem;
	overflow: hidden;
	width: 100%;
}
/*商品价钱*/
.price{
	position: relative;
	width: 100%;
	height: 30px;
}
.before_price{
	position: absolute;
	top: 0;
	left: 0;
	color: grey;
	font-size: 0.3rem;
}
.before_price em{
	font-style: normal;
	text-decoration: line-through;
}
.now_price{
	width: 100%;
	height: 0.4rem;
	font-size: 0.35rem;
	color: #ff712b;
	position: absolute;
	bottom: 0;
	left: 0;
}
/*添加按钮*/
.add_btn{
	position: absolute;
	right: 10px;
	top: 8px;
}
.add_btn i{
	display: inline-block;
	width: 30px;
	height: 30px;
	background:url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136) no-repeat;
	background-size: 10.0rem auto;
	background-position: -3.75rem -3.75rem;
}













</style>