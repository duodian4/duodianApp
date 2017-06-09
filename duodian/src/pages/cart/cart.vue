<template>
<div id="cart">
	<div class="toolBar">购物车</div>
	<div></div>
	<div class="container">
		<div class="address">
			<p>多点君需要你的详细地址呦~</p>
			<p>送至:昌平(地铁站)</p>
			<span class="goto gotoA"></span>
		</div>
		<div class="clear">
			<span class="btn">
				<i></i>
				<i></i>
			</span>
			<span>
				<img src="" alt="">
			</span>
			<p>多点超市(昌平西关店)</p>
			<span class="goto gotoB"></span>
		</div>
		<ul class="goods">
			<li>
				<span class="btn">
					<i></i>
					<i></i>
				</span>
				<div class="info">
					<p class="produce_name">红肉火龙果</p>
					<p class="produce_price">
						￥
						<strong>19.90</strong>
					</p>
				</div>
				<div class="pro">
					<i class="reduce_r"></i>
					<span>21</span>
					<span>{{this.$store.state.money.toFixed(2)}}</span>
					<i class="add_b"></i>
				</div>
			</li>
		</ul>
		<!-- 结算 -->
		<div class="close">
			<div class="count">
				<p class="total">
					合计：
					<i>￥</i>
					<strong>32.23</strong>
					（不含运费）
				</p>
				<p class="promotion">促销已抵扣金额：￥7.00</p>
			</div>
			<span class="over">选好了</span>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data(){
		return {
			data:[]
		}
	}
}
</script>

<style scoped>
#cart{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 1.25rem;
	background-color: #fff;
	padding-top: 1.1rem;
}
#cart .toolBar{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 1.1rem;
	line-height: 1.1rem;
	text-align: center;
	background-color: #fff;
	font-size: 16px;
	box-shadow: 0 0 0.25rem rgba(0,0,0,.2);
}
#cart .container{
	width: 100%;
	height: 100%;
	margin-top: 0.25rem;
	background-color: #f0f0f0;
}
#cart .address{
	padding: 0.25rem 0.625rem 0.25rem 0.25rem;
	background-color: #fff;
	background-image: url(https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png);
    background-repeat: repeat-x;
    background-position: top left;
    background-size: auto 2px;
    position: relative;
}
#cart .address p:first-child{
	font-size: 16px;
	line-height: 0.6rem;	
}
#cart .address p:nth-child(2){
	font-size: 13px;
	line-height: 0.6rem;
	color: grey;
	word-wrap: break-word;
    word-break: break-all;
}
#cart .goto{
	display: inline-block;
	width: 0.2rem;
	height: 0.2rem;
	border-width: 2px 2px 0 0;
	border-style: solid;
	border-color: #c8cccd;
	transform: rotate(45deg);
}
#cart .gotoA{
	position: absolute;
	right: 0.25rem;
	top: 0.8rem;
}
#cart .clear{
	/*margin: 0.25rem 0;*/
	margin-top: 0.25rem;
	height: 1.1rem;
	line-height: 1.1rem;
	background-color: #fff;
	font-size: 14px;
    font-weight: 400;
    color: grey;
    padding-left: 1.0rem;
    padding-right: 0.75rem;
    position: relative;
    border-bottom: 1px solid #f0f0f0;
}
#cart .btn{
	display: inline-block;
	width: 1.0rem;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
#cart .btn i{
	display: inline-block;
	width: 0.75rem;
	height: 0.75rem;
	background-image: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136);
    background-repeat: no-repeat;
    background-size: 10.0rem auto;  
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.375rem;
    margin-top: -0.375rem;
}
#cart .btn i:first-child{
	background-position: -6.25rem -3.75rem;
}
#cart .btn i:last-child{
	background-position: -5.0rem -3.75rem;
	display: none;
}
#cart .gotoB{
	position: absolute;
	right: 0.25rem;
	top: 0.375rem;
}
#cart .info{
	padding: 0.25rem 2.75rem 0.25rem 0;
	height: 1.275rem;
}
#cart .goods li{
	background-color: #fff;
	position: relative;
	padding-left: 1.0rem;
	overflow: hidden;
	border-bottom: 1px solid #f0f0f0;
}
#cart .produce_name{
	color: #21292b;
    font-size: 14px;
    max-width: 100%;
}
#cart .produce_price{
	margin-top: 0.125rem;
	font-size: 16px;
}
#cart .pro{
	position: absolute;
	right: 0.25rem;
	top: 30%;
	width: 2.25rem;
	height: 0.75rem;
	overflow: hidden;
}
#cart .pro i{
	display: inline-block;
	background-image: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136);
    background-repeat: no-repeat;
    background-size: 400px auto;  
    width: 0.75rem;
    height: 0.75rem;    
}
#cart .reduce_r{
	background-position: 0 -10.0rem;
	float: left;
}
#cart .add_b{
	background-position: -3.75rem -3.75rem;
	float: left;
}
#cart .pro span{
	display: inline-block;
	width: 0.75rem;
	text-align: center;
	font-size: 14px;
	font-weight: 700;
	float: left;
	line-height: 0.75rem;
}
#cart .close{
	background-color: #fff;
	padding: 0.25rem;
	position: relative;
}
#cart .total{
	font-size: 14px;
	color: #ff712b;
	margin-bottom: 0.125rem;
}
#cart .total i{
	font-style: normal;
}
#cart .total strong{
	font-size: 18px;
}
#cart .promotion{
	font-size: 12px;
	color: grey;
}
#cart .over{
	display: inline-block;
	width: 1.05rem;
	height: 1.0rem;
	line-height: 1.0rem;
	color: #fff;
	background: #ff712b;
	font-size: 14px;
	padding: 0 0.55rem;
	border-radius: 0.1rem;
	position: absolute;
	right: 0.25rem;
	top: 50%;
	margin-top: -0.5rem;
}
</style>