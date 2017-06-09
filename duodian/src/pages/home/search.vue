<template>
<div id="search">
	<div class="toolbar">
		<span class="return" @click="back">
			<i></i>
		</span>
		<div class="search_produce">
			<i></i>
			<input type="text" placeholder="搜索想要的商品">
		</div>
	</div>
	<div class="hot_search">
		<div class="hot_width">
			<div class="hot">
				热门搜索
				<div>
					昌平西关店
					<i></i>
				</div>
			</div>
			
		</div>	
	</div>
	<div class="pro">
		<ul>
			<li>饮料</li>
			<li>榨菜</li>
			<li>粽子</li>
			<li>面包</li>
			<li>儿童洗发</li>
		</ul>	
	</div>
	<!-- 附近商家 -->
	<div class="nearby_shop">
		<div>附近商家</div>
	</div>
	<div class="content">
		<ul>
			<li>
				<a href="">
					<img src="https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f" alt="">
					<h4>多点超市</h4>
					<p>超市商品,两小时达</p>
				</a>
			</li>
		<li>
			<a href="">
				<img src="https://img.dmallcdn.com/bizItem/201610/1bf901f7-a57f-4176-ad53-16d709a10322" alt="">
				<h4>全球精选</h4>
				<p>优质甄选,好货低价</p>
			</a>
		</li>
	</ul>
	</div>
	

</div>
</template>

<script>
export default{
	name:"search",
	methods:{
		back(){
			history.back()
		}
	}
}
</script>

<style scoped>
#search{
	z-index: 200;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	padding-top: 1.1rem;
}
/*搜索框*/
#search .toolbar{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 1.1rem;
	line-height: 1.1rem;
	text-align: center;
	padding-right: 0.375rem;
	padding-left: 1.375rem;
	font-size: 0.4rem;
	box-shadow: 0 0 10px rgba(0,0,0,.2);
}
#search .return{
	position: absolute;
	top: 3px;
	left: 0.2rem;
	display: inline-block;
	width: 1.0rem;
	height: 1.0rem;
	padding-left: 0.1rem;
}
#search .return i{
	position: relative;
	top: 5px;
	font-style: normal;
	display: inline-block;
	width: 0.8rem;
	height: 0.8rem;
	background-color: #333;
	background-image: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136);
	background-repeat: no-repeat;
	background-size: 10.0rem auto;
	background-position: 1px -150px;
	border-radius: 0.4rem;
}
#search .search_produce{
	height: 0.75rem;
	position: relative;
	top: 0.2rem;
	padding: 0 0.4rem 0 27px;
	border-radius: 0.1rem;
	border:1px solid #f0f0f0;
}
#search .search_produce input{
	width: 100%;
	height: 0.7rem;
	display: block;
	border:none;
	font-size: 0.35rem;
	outline: none;
}
#search .search_produce i{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	background-image: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136);
	background-repeat: no-repeat;
	background-size: 400px auto;
	background-position: -50px -200px;
	position: absolute;
	left: 0.075rem;
	top: 0.125rem;
}
#search .hot_search{
	width: 100%;
}
#search .hot_width{
	height: 60px;
	padding: 0 0.375rem;
	/*margin-bottom: 0.15rem;*/
	font-size: 14px;
}
#search .hot{
	width: 100%;
	padding: 0.375rem 0;
	color: #cbcbcb;
	position: relative;
	border-bottom: 1px solid #f0f0f0;
}
#search .hot>div{
	position: absolute;
	right: 10px;
	top: 0.375rem;
	color: grey;
}
#search .hot>div>i{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	background-image: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136);
	background-repeat: no-repeat;
	background-size: 400px auto;
	background-position: -250px -200px;
	position: relative;
	top: 2px;
}
#search .pro{
	width: 100%;
}
#search .pro ul{
	padding: 0 0.375rem 0.125rem;
	overflow: hidden;
}
#search .pro ul li{
	font-size: 14px;
	color: #404040;
    padding: 0.15rem 0.25rem;
    border: 1px solid #f0f0f0;
    display: block;
    float: left;
    background-color: #fff;
    border-radius: 0.375rem;
    margin-left: 0.125rem;
    margin-top: 0.125rem;
}
.nearby_shop{
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
}
.nearby_shop div{
	padding: 0.375rem;
	font-size: 14px;
	color: #cbcbcb;
}
#search .content{
	width: 100%;
}
#search .content ul{
	overflow: hidden;
}
#search .content li{
	width: 50%;
	height: 2.25rem;
	float: left;
	box-sizing: border-box;
	border-bottom: 1px solid #f0f0f0;
	border-right: 1px solid #f0f0f0;
}
#search .content li img{
	display: inline-block;
	width: 1.1rem;
	max-width: 100%;
	height: 0.8rem;
	margin-left: 2.0rem;
}
#search .content li h4{
	font-size: 12px;
	line-height: 0.4rem;
	text-align: center;
	color: #404040;
    font-weight: 400;
    margin-bottom: 0.125rem;
}
#search .content li p{
	font-size: 10px;
	line-height: 0.25rem;
	text-align: center;
	color: grey;
}
</style>