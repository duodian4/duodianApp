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
					<i class="add_b"></i>
					<span>21</span>
					<i class="reduce_r"></i>
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
	box-shadow: 0 0 10px rgba(0,0,0,.2);
}
#cart .container{
	width: 100%;
	height: 100%;
	margin-top: 0.25rem;
	background-color: #f0f0f0;
}
#cart .address{
	padding: 10px 25px 10px 10px;
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
    padding-left: 40px;
    padding-right: 30px;
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
    background-size: 400px auto;  
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
}
#cart .btn i:first-child{
	background-position: -250px -150px;
}
#cart .btn i:last-child{
	background-position: -200px -150px;
	display: none;
}
#cart .gotoB{
	position: absolute;
	right: 0.25rem;
	top: 0.375rem;
}
#cart .info{
	padding: 10px 110px 10px 0;
	height: 51px;
}
#cart .goods li{
	background-color: #fff;
	position: relative;
	padding-left: 40px;
	overflow: hidden;
	border-bottom: 1px solid #f0f0f0;
}
#cart .produce_name{
	color: #21292b;
    font-size: 14px;
    max-width: 100%;
}
#cart .produce_price{
	margin-top: 5px;
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
    width: 30px;
    height: 30px;    
}
#cart .add_b{
	background-position: 0 -400px;
	float: left;
}
#cart .reduce_r{
	background-position: -150px -150px;
	float: right;
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
	padding: 10px;
	position: relative;
}
#cart .total{
	font-size: 14px;
	color: #ff712b;
	margin-bottom: 5px;
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
	border-radius: 4px;
	position: absolute;
	right: 10px;
	top: 50%;
	margin-top: -20px;
}
</style>