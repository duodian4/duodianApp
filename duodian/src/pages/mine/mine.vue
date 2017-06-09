<template>
	<div id="mine">
		<div class="top1">
			<div class="top1_top">
				<p>你好</p>
				<p class="top1_top_img">
					<span class="top1_top_huiyuan">普通会员</span>
				</p>	
			</div>
			<div class="top1_2">
				<ul>
					<router-link to='/myyue' tag='li'>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">余额</span>
					</router-link>
					<router-link to='/myjifeng' tag='li'>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">积分</span>
					</router-link>
					<router-link to='/mykabao' tag='li'>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">卡包</span>
					</router-link>
					<router-link to='/myyouhui' tag='li'>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">优惠券</span>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="saoma" @click='flagm=true'>
			<div class="saoma_img"></div>
			<div class="saoma_zi">
				<span>会员专属码</span>
			</div>
		</div>
		<div class="huitiao">
			<router-link to="/daizhifu_mine">
				<p></p><span>待支付</span>
			</router-link>
			<router-link to="/weiwanc_mine">
				<p></p><span>未完成</span>
			</router-link>
			<router-link to="/yiwanc_mine">
				<p></p><span>已完成</span>
			</router-link>
			<router-link to="/quanbuding_mine">
				<p></p><span>全部订单</span>
			</router-link>
				
		</div>
		<div class="middle">
			<router-link to="/huiyuan" tag="a">
				<p></p><span>会员中心</span>
			</router-link>
			<router-link to="/shouhua_mine" tag="a">
				<p></p><span>收货地址</span>
			</router-link>
			<router-link to="/help_mine" tag="a">
				<p></p><span>帮助中心</span>
			</router-link>
			<router-link to="/kefu_mine" tag="a">
				<p></p><span>客服电话</span>
			</router-link>
			<router-link to="/tiyan_mine" tag="a">
				<p></p><span>体验APP</span>
			</router-link>
			<router-link to="/fazhan_mine" tag="a">
				<p></p><span>发展中心</span>
			</router-link>
			<router-link to="/bangka_mine" tag="a">
				<p></p><span>绑卡</span>
			</router-link>
			<router-link to="/yaoqing_mine" tag="a">
				<p></p><span>邀请</span>
			</router-link>

<!-- 				<a href="#"><p></p><span>收货地址</span></a>
				<a href="#"><p></p><span>帮助中心</span></a>
				<a href="#"><p></p><span>客服电话</span></a>
				<a href="#"><p></p><span>体验APP</span></a>
				<a href="#"><p></p><span>发展中心</span></a>
				<a href="#"><p></p><span>绑卡</span></a>
				<a href="#"><p></p><span>邀请</span></a> -->
		</div>
		<div class="tanchuang_mine" v-bind:class="{showmine:flagm}">
			
			<div class="tanchuang_mine_1">
				<img src="../../../static/img/98zhe.png">
				<div class="tanchuang_mine_2"><p>接口找不到....So.....</p></div>
				<a class="tanchuang_mine_3" href="http://app.dmall.com/m/?utm_campaign=Online-Channel&utm_term=dm010377777777&dmfrom=wx&from=wx"><span>下载App立享98折</span></a>
				<div class="tanchuang_mine_close" @click="flagm=false" ></div>
			</div>
			
		</div>
		<div class="mine_zhezhao" v-if='flagm'></div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			flagm:false
		}
	},
	
}

</script>

<style scoped>
	#mine{
		font-size: 16px;
	}
	#mine .top1{
		height: 150px;
		position: relative;
		width: 100%;
		background:url(../../../static/img/mine-top-img.png) no-repeat;
		background-size: 100%;
		color: white;
	}
	.top1_top{
		padding: 25px 0  0 70px;
	}
	.top1_2{
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: rgba(0,0,0,.1);
		height: 1.325rem;
		width: 100%;
		line-height: 0.625rem;
	}
	.top1_2 ul{
		display: flex;
		justify-content: space-around;

	}
	.top1_2 ul li{
		text-align: center;
	}
	.top1_2_1{
		display: inline-block;
		width: 100%;
	}
	.top1_top_img{
		background:url(../../../static/img/mine-level-0.png) no-repeat;
		background-size: 0.625rem;
		background-color: #333;
		text-indent: 0.6rem;
		border: 1px solid #333;
		border-radius: 0.675rem;
		padding: 1px 4px 1px 0;
		background-position: -1px center;
		font-size: 12px;
		line-height: 0.35rem;	
		display: inline-block;
	}
	.saoma{
		height: 1.45rem;
		width: 100px;
		position: absolute;
		right: 0.5rem;
		top: 0.25rem;
	}
	.saoma_img{
		background:url(../../../static/img/sprt.png) no-repeat 22px -939px;
		height: 50px;
		width: 100%;
	}
	.saoma_zi{
		text-align: center;
		color: white;
		font-size: 14px;
	}
	.huitiao{
		height: 2.0rem;
		border-top: 10px solid #f0f0f0;
		display: flex;
		justify-content: space-around;
	}
	.huitiao a:nth-child(1){
		background-position: 5px -670px;
	}
	.huitiao a:nth-child(2){
		background-position: -57px -670px;
	}
	.huitiao a:nth-child(3){
		background-position: -120px -670px;
	}
	.huitiao a:nth-child(4){
		background-position: -183px -671px;
	}
	.huitiao a{
		display: inline-block;
		background-image:url("../../../static/img/sprt.png");
		background-size: 500px auto;
	}
	.huitiao a p{
		display: inline-block;
		height: 58px;
		width: 100%;
		
	}
	.huitiao a span{
		color: gray;
	}
	.middle{
		display: flex;
		width: 100%;
		height: 150px;
		flex-wrap: wrap;
		text-align: center;
		height: 2.0rem;
		border-top: 10px solid #f0f0f0;
		margin-top:15px;
		padding-top: 18px;
	}
	.middle a{
		display:block;
		height: 75px;
		width: 25%;
	}
	.middle a p{
		display:block;
		height: 30px;
		width: 38px;
		margin-left: 35px;
		background-image:url("../../../static/img/sprt.png");
		background-size: 500px auto;
	}
	.middle a:nth-child(1) p{
		background-position:-5px -639px; 
	}
	.middle a:nth-child(2) p{
		background-position:-66px -639px; 
	}
	.middle a:nth-child(3) p{
		background-position:-129px -639px; 
	}
	.middle a:nth-child(4) p{
		background-position:-190px -639px; 
	}
	.middle a:nth-child(5) p{
		background-position:-254px -639px; 
	}
	.middle a:nth-child(6) p{
		background-position:-316px -688px; 
	}
	.middle a:nth-child(7) p{
		background-position:-250px -690px; 
	}
	.middle a:nth-child(8) p{
		background-image:url(../../../static/img/icon-invite-friends.png); 
		background-repeat:no-repeat;
		background-position: 0 0;
		background-size: 35px 35px;
	}
	/*.middle a p{
		display: inline-block;
		width: 25%;
		height: 68px;
		display: inline-block;
		background-image:url("../../../static/img/sprt.png");
		background-size: 500px auto;
	}*/
	
	.middle a span{
		color:gray;
	}
	.mine_zhezhao{
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;top: 0;
		background-color: #000;
		opacity: .5;
		z-index: 102;
	}
	.tanchuang_mine{
		visibility: hidden;
	}
 	.showmine{
			/*display: block;*/
		visibility: visible;
	}
	.tanchuang_mine_1{
		height: 400px;
		
		position: absolute;
		top: 130px;
		left:8%;
		right: 8%;
		z-index: 109;
		background-color: white;

	}
	.tanchuang_mine_2{
		text-indent: 10%;
	}
	.tanchuang_mine_3{
		position: absolute;
		left: 10%;
		bottom: 10%;
		height: 44px;
		width: 80%;
		text-align: center;
		line-height: 44px;
		background-color: #ff6800;
	}
	.tanchuang_mine_3 span{
		color: white;
	}
	.tanchuang_mine_1 img{
		height: 3.75rem;
		width: 3.75rem;
		margin-left: 28%;
		margin-top: 5%;
	}
	.tanchuang_mine_close{
		background-position: -62px -374px;
	}
	.tanchuang_mine_close{
		height: 50px;
		width: 50px;
		background-image: url(../../../static/img/sprt.png);
		background-repeat: no-repeat;
		background-size: 500px auto;
		position: absolute;
		top:100% ;
		left: 42%;
		z-index: 110;
		}
</style>