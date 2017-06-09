<template>
<div id="globalselect">
	<!-- 轮播图 -->
	<div class="continer">
		<img src="https://img.dmallcdn.com/mIndex/201706/039c1bcc-9aaa-4232-a2d3-5fdd7bee8ad0_750H" alt="">
	</div>
	<div class="chao_zhi">
		<img src="https://img.dmallcdn.com/mIndex/201706/77f648ec-7ec9-4ac8-bad4-0a9c0dfe8777_750H" alt="">
	</div>
	<div class="bao_kuan">
		<img src="https://img.dmallcdn.com/mIndex/201706/0a0ab145-601b-4ba1-96de-d0b0298b832a_750H" alt="">
	</div>
	<!-- 爆款裸价 -->
	<ul class="greens_list">
		<li v-for="item in baoKuan">
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
	<!-- 会场 -->
	<ul class="assembly_room">
		<li><a href=""><img src="https://img.dmallcdn.com/mIndex/201706/ebc624e1-1b27-4958-92fc-fe6fdfdbdcb2_480x480H" alt=""></a></li>
		<li><a href=""><img src="https://img.dmallcdn.com/mIndex/201706/421e67ad-17d4-41c9-b284-95c5001048e8_480x480H" alt=""></a></li>
		<li><a href=""><img src="https://img.dmallcdn.com/mIndex/201706/bf63b8a6-3c36-4342-9c1d-e2a94a4ff816_480x480H" alt=""></a></li>
		<li><a href=""><img src="https://img.dmallcdn.com/mIndex/201706/7ffd5a61-ef04-43e3-ae32-eb65d9ac745f_480x480H" alt=""></a></li>
	</ul>
	<!-- 年终爽购节 -->
	<ul class="slider_list">
		<li v-for="item in shuang">
			<img :src="item.imageUrl" alt="">
			<p>{{ item.remark }}</p>
		</li>
		<li v-for="item in xianData">
			<img :src="item.imageUrl" alt="">
			<p>{{ item.remark }}</p>
		</li>		
	</ul>
	<!-- 无味诱惑 -->
	<div class="smell">
		<img src="https://img.dmallcdn.com/mIndex/201705/78f3ecf3-424a-4169-8f51-eaf9ed99a9cb_750H" alt="">
	</div>
	<div class="fresh">
		<a href="" class="jijie">
			<img src="https://img.dmallcdn.com/mIndex/201705/da0385f7-ff37-4413-af0e-60223ff72c15_480x480H" alt="">
		</a>
		<a href="" class="sunday">
			<img src="https://img.dmallcdn.com/mIndex/201705/b8cb5593-a160-406e-b844-aadb57ad35fd_480x480H" alt="">
		</a><a href="" class="happy">
			<img src="https://img.dmallcdn.com/mIndex/201705/f6c2351e-794e-49cf-ac1a-22c3321557c5_480x480H" alt="">
		</a>
	</div>
	<!-- 精选推荐 -->
	<div class="optimization">
		<img src="https://img.dmallcdn.com/mIndex/201705/81d22d95-8604-459a-a549-cdb2f0355787_750H" alt="">
	</div>
	<ul class="optimization_list">
		<li v-for="item in jingShang">
			<a href=""><img :src="item.imageUrl" alt=""></a>
		</li>
		<li v-for="item in jingXia">
			<a href=""><img :src="item.imageUrl" alt=""></a>
		</li>
	</ul>
	<!-- 超值单品 -->
	<div class="single_produce">
		<a href=""><img src="https://img.dmallcdn.com/mIndex/201705/bfe4cd8a-58f8-4be0-bf5a-f1b0e5ebe69a_750H" alt=""></a>
	</div>
	<ul class="greens_list">
		<li v-for="item in baoKuan">
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
	<!-- 水果楼层 -->
	<ul class="floor_list">
		<li>
			<ol class="fruit_floor">
				<li v-for="item in fruitFloor">
					<a href=""><img :src="item.imageUrl" alt=""></a>
				</li>
			</ol>
			<ul class="greens_list">
				<li v-for="item in fruitSingle">
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
	</ul>
</div>
</template>

<script type="text/javascript">
export default{
	name:"globalselect",
	data(){
		return {
			baoKuan:[],
			room:[],
			shuang:[],
			xianData:[],
			jingShang:[],
			jingXia:[],
			fruitFloor:[],
			fruitSingle:[]
			
		}
	},
	created(){
		this.$http.get('../static/data/quanQiu.json').then(res => {
			// console.log(res.data.data.pageModules[0].dataList);//轮播图
			// console.log(res.data.data.pageModules);
			this.baoKuan = res.data.data.pageModules[10].dataList;
			this.room = res.data.data.pageModules[5].dataList;
			this.shuang = res.data.data.pageModules[1].dataList;//年中爽购节上
			this.xianData = res.data.data.pageModules[2].dataList;//年中爽购节下
			this.jingShang = res.data.data.pageModules[7].dataList;//精选推荐上
			this.jingXia = res.data.data.pageModules[8].dataList;//精选推荐下
			this.fruitFloor = res.data.data.pageModules[11].dataList;//水果楼层
			this.fruitSingle = res.data.data.pageModules[12].dataList;//水果单品
		})
	},
	methods(){

	}
}
</script>

<style scoped>
#globalselect{
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
.chao_zhi{
	width: 100%;
}
.chao_zhi img{
	display: block;
	width: 100%;
	height: 2.425rem;
}
.bao_kuan{
	width: 100%;
}
.bao_kuan img{
	display: block;
	width: 100%;
	height: 1.1rem;
}
.greens{
	width: 414px;
	overflow: hidden;
	height: 6.15275rem;
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
/*会场*/
.assembly_room{
	width: 100%;
	overflow: hidden;
}
.assembly_room li{
	width: 50%;
	float: left;
}
.assembly_room li img{
	display: block;
	width: 100%;
}
/*年终爽购节*/
.slider_list{
	width: 100%;
	border-top: 10px solid #f0f0f0;
	padding-bottom: 0.175rem;
	overflow: hidden;
}
.slider_list li{
	width: 20%;
	padding-bottom: 0.125rem;
	padding-top: 0.125rem;
	float: left;
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
/*五味诱惑*/
.smell{
	width: 100%;
}
.smell img{
	display: block;
	width: 100%;
	height: 0.87rem;
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
/*精选推荐*/
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
	width: 33.333333333%;
	height: 4.14rem;
	float: left;
}
.optimization_list li img{
	display: block;
	width: 100%;
	height: 100%;
}
/*超值单品*/
.single_produce{
	width: 100%;
}
.single_produce img{
	width: 100%;
	display: block;
}
/*楼层列表*/
.floor_list{
	width:100%;
}
.floor_list>li{
	width: 100%;
}
.fruit_floor{
	width: 100%;
	overflow: hidden;
}
.fruit_floor>li{
	width: 100%;
	height: 4.14375rem;
}
.fruit_floor>li img{
	display: block;
	width: 100%;
	height: 100%;
}
</style>