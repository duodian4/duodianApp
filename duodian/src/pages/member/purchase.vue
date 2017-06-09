
<template>
	<div id="purchase">
		<div class="headBar">
			<div class="backtrack" @click="backtrack()">
				<span class="J_Back">
					<i></i>
				</span>
			</div>
			<span class="J_Title">会员权益</span>
			<div class="scart">
			<router-link to="../cart" tag="span" class="J_Cart">
				<i></i>
					<span class="J_CartNum"></span>
				</router-link>
			</div>
		</div>
		<div class="container">
			<div class="top">
				<div class="row row1">
					<div class="row1-pic">
						<img src="http://wumart.b0.upaiyun.com/point_promotion_icon@3x.png">
					</div>
					<div class="row1-txt">
						<p>积分加价购</p>
						<p>专享会员特卖送给你</p>
					</div>
				</div>
				<div class="row row2">
					<p>
						<img src="../../../static/imghuiyuan/b_08.png">
						<b class="flt">权益内容:</b
						<span>首次注册多点App的专享礼</span>
					</p>
					<p class="mt12">
						<img src="../../../static/imghuiyuan/b_10.png">
						<b class="flt">权益对象:</b
						<span>普通会员</span>
					</p>
					<p class="mt12">
						<img src="../../../static/imghuiyuan/b-qd.png">
						<b class="flt">使用渠道:</b
						<span>多点及物美超市</span>
					</p>
				</div>
				<!-- <div class="swipers">
					<div class="swiper-container-banner"></div>
				</div> -->
			</div>
			<div class="row row3">
				<div class="giftDesc">
					<h4>权益介绍</h4>
					<p>会员在物美线下实体门店，持会员卡中的积分+相应价格可换购会员独享商品，不限次数，敬请留意物美门店内活动海报</p>
				</div>
			</div>
			<!-- <div class="dialogs"></div> -->
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		backtrack(){
			history.back()
		}
	}
	
}
	
</script>

<style>
 #purchase{
 	width: 100%;
 	height: 100%;
 	z-index: 100;
 	position: fixed;
 	overflow: hidden;
 	background-color: white;
 }
 #purchase .headBar{
 	width: 100%;
 	height: 1.1rem;
 	font-size: 16px;
 	box-shadow: 0px 0px 10px rgba(0,0,0,.2);
 	text-align: center;
 	position: fixed;
 	top: 0;
 	left: 0;
 	background-color: #fff;
 	z-index: 1999;
 	line-height: 1.1rem;
 }
#purchase .headBar .backtrack{
	width: 1.6rem;
	height: 1.1rem;
	position: absolute;
	left: 0;
}
#purchase .headBar .backtrack .J_Back{
	display: block;
	width: 100%;
	height: 100%;
	cursor: pointer;
}
#purchase .headBar .backtrack .J_Back i{
	display: block;
	height: 0.8rem;
	width: 0.8rem;
	overflow: hidden;
	border-radius: 0.4rem;
	background: url(../../../static/imghuiyuan/38a28854-16bf-4946-a5a3-a8eabc5dee78.jpg) no-repeat center;
	background-size: 100%;
	position: absolute;
	top: 5px;
	left: 0.25rem;
}
#purchase .J_Title{
	display: block;
	width: 60%;
	margin: 0 20%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	color: grey;
}
#purchase .scart{
	height: 1.1rem;
	width: 1.6rem;
	position: absolute;
	right: 0;
	top: 0;
	padding-left: 0.25rem;
}
#purchase .J_Cart{
	display: block;
	width: 100%;
	height: 100%;
}
#purchase .J_Cart i{
	display: block;
	position: absolute;
	right: 0.5rem;
	top: 0.15rem;
	width: 0.8rem;
	height: 0.8rem;
	overflow: hidden;
	background: url(../../../static/imghuiyuan/e9e2dbae-64ae-455a-b55f-317078f032d2.png) 3px center no-repeat;
	background-size: 0.65rem auto;
}
#purchase .scart .J_CartNum{
	display: none;
	border-radius: 0.25rem;
	border: 1px solid #fff;
	position: absolute;
	color: #fff;
	right: 0.25rem;
	top: 3px;
	text-align: center;
	font-size: 12px;
	background-color: #eb2243;
	height: 0.5rem;
	line-height: 0.45rem;
	width: 0.5rem;
}
#purchase .container{
	margin-top: 1.2rem;
	width: 100%;
	height: 9.05rem;
	display: block;
}
#purchase .top{
	height: 5.95rem;
	width: 100%;
	background: url(../../../static/imghuiyuan/topback.png) no-repeat;
	background-size: 100% auto;
}
#purchase .top .row.row1{
	height: 2.35rem;
}
#purchase .top .row1{
	width: 6.5rem;
	height: 2.0rem;
	margin: 0 auto;
}
#purchase .top .row{
	clear: both;
}
#purchase .top .row1-pic{
	width: 2.0rem;
	height: 2.05rem;
	margin: 0.375rem;
	float: left;
	width: 2.0rem;
}
#purchase .top .row1-pic img{
	display: block;
	clear: both;
	width: 2.05rem;
	height: 2.05rem;
	vertical-align: top;
	border: 0;
}
#purchase .top .row1-txt{
	height: 1.575rem;
	width: 3.65rem;
	margin: 0.375rem 0 0 0;
	float: left;
	padding-top: 5%;
}
#purchase .top .row1-txt p:first-of-type{
	font-size: 18px;
	height: 0.6rem;
}
#purchase .top .row1-txt p:last-of-type{
	height: 0.4rem;
	font-size: 12px;
	color: #999;
}
#purchase .top .row1-txt p{
	width: 3.65rem;
	margin: 5px 0 0 0;
	color: #36383f;
}
#purchase .top .row.row2{
	width: 100%;
	height: 3.15rem;
	padding: 0.375rem 0.375rem 0.625rem 0.375rem;
}
#purchase .top .row2 p{
	font-size: 13px;
	color: #666;
	margin: 0 0 2px 0;
}
#purchase .top .row2 img{
	float: left;
}
#purchase .top .row2 p img{
	width: 0.4rem;
	margin: 2px 5px 0 0;
}
#purchase .top .row2 b{
	height: 0.5rem;
	width: 1.625rem;
	font-weight: normal;
	line-height: 0.5rem;
	float: left;
}
#purchase .top .row2 span{
	width: 69%;
	display: inline-block;
	margin-left: 2px;
	line-height: 0.5rem;
	height: 0.5rem;
}
#purchase .top .row2 .mt12{
	margin-top: 0.3rem !important;
}
#purchase .row3{
	width: 100%;
	height: 3.1rem;
	padding: 0 0.25rem;

}
#purchase .row3 .giftDesc{
	height: 3.1rem;
	width: 8.875rem;
	padding-bottom: 1.0rem;
}
#purchase .row3 .giftDesc h4{
	width: 8.875rem;
	height: 1.175rem;
	line-height: 1.175rem;
	font-size: 13px !important;
	color: #36383f;
	padding: 0.75rem 0 0 0;
	font-weight: normal;
}
#purchase .row3 .giftDesc p{
	width: 8.875rem;
	height: 0.6rem;
	font-size: 12px !important;
	color: #666;
	line-height: 0.6rem;
}
</style>