<template>

	<div id="member">
		<div id="head">
			<h3 class="text">{{msg}}</h3>
			<div class="half-enter row clearfix">
				<span class="item col-6">
					<span class="wrap J_MemberCenter J_ClickTrace">
						<i class="icon i-member-center"></i>
						<p>会员中心</p>
					</span>
				</span>
				<span class="item col-6" >
					<span class="wrap J_OfflineActive J_ClickTrce">
						<em class="float-label">
							<span>立享优惠</span>
						</em>
						<i class="icon i-offline-active"></i>
						<p>会员专属码</p>
					</span>
				</span>
			</div>
			<div class="quarter-enter">
				<ul class="row clearfix">
					<li class="item col-3 border-1px border-r">
						<div class="J_BalancePage box J_ClickTrace">
							<em>
								<i>￥</i>0.00
							</em>
							<p>余额</p>
						</div>
					</li>
					<li class="item col-3 border-1px border-r ">
						<div class="J_BonusPoints box J_ClickTrace">
							<em>
								0
							</em>
							<p>积分</p>
						</div>
					</li>
					<li class="item col-3 border-1px border-r ">
						<div class="box J_ClickTrace">
							<em>
								0
							</em>
							<p>成长值</p>
						</div>
					</li>
					<li class="item col-3 border-1px border-r ">
						<div class="J_CouponPage box J_ClickTrace">
							<em>
								0
							</em>
							<p>优惠券</p>
						</div>
					</li>
				</ul>
			</div>
			<ul class="rights-enter clearfix">
				<li class="item disabled">
					<a href="#" class="box J_Link J_clickTrace">
						<i class="vip-icon">
							<img src="http://wumart.b0.upaiyun.com/new_user_enable.png">
							<p>新手特权</p>
						</i>
					</a>
				</li>
				<li class="item disabled">
					<a href="#" class="box J_Link J_clickTrace">
						<i class="vip-icon">
							<img src="http://wumart.b0.upaiyun.com/wumart_enable.png">
							<p>物美特惠</p>
						</i>
					</a>
				</li>
				<li class="item disabled">
					<a href="#" class="box J_Link J_clickTrace">
						<i class="vip-icon">
							<img src="http://wumart.b0.upaiyun.com/point_promotion_enable_icon@3x.png">
							<p>积分加购价</p>
						</i>
					</a>
				</li>
				<li class="item disabled">
					<a href="#" class="box J_Link J_clickTrace">
						<i class="vip-icon">
							<img src="http://wumart.b0.upaiyun.com/birthday_enable.png">
							<p>生日特权</p>
						</i>
					</a>
				</li>
				<li class="item disabled">
					<a href="#" class="box J_Link J_clickTrace">
						<i class="vip-icon">
							<img src="../../../static/imghuiyuan/more-rights.png">
							<p>全部权益</p>
						</i>
					</a>
				</li>
			</ul>
		</div>
		<div class="notice border-1px border-t">
			<h4 class="head-title">
				<i class="icon i-notice"></i>
			</h4>
			<div id="noticeMsgBar" class="list border-1px border-l">
				<ul>
					<li>
						<a href="#" class="J_Link ellips J_ClickTrace">物美会员升级，点击了解更多升级福利！</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="J_FloatEntrance float-entrance">
			<a href="#" class="J_Link J_ClickTrace">
				<img src="http://img.dmall.com/common/1a0cb91b-f2c4-4d90-87f0-7176f01b8ece">
			</a>
		</div>
		<router-link to="/download" tag="div" class="picture">
			<img src="../../../static/imghuiyuan/680e314b-349b-4d74-b5f0-bbee270fb1ff.png">
			<img src="../../../static/imghuiyuan/33806e8c-a7ee-47e6-a901-1fd65e2bd562.png">
			<img src="../../../static/imghuiyuan/1e202cc5-017a-4ee3-9ffa-7503a42f4494.png">
		</router-link>
		<!-- <div class="picture">
			
		</div> -->
		<div class="J_ModalUi ui-modal">
			<div class="J_ModalCont pop" style="margin-top:-5.825rem;margin-eft:-4.025rem">
				<div class="contet">
					<i class="icon-close-barcode">
						<img src="../../../static/imghuiyuan/bd5b7152-668b-44ba-a403-969902f4e213.png">
					</i>
					<p>对不起 TT-TT
					<br>
					我们暂时关闭了微信商城的扫码功能.
					</p>
					<p>
						 因为，我们决定玩个大的！！！
						 <br>
						 即日起，新同学用“多点app”首次扫码立享98折哦！老朋友用“多点app”线下扫码 享随机折扣 最高免单！！！
					</p>
					<button type="button" class="button primary J_DownlosdApp">下载App立享98折</button>
				</div>
				<div class="J_Close close">
					<i class="icon i-modal-close"></i>
				</div>
				<div class="J_Mask mask"></div>
			</div>
		</div>
	</div>
	

</template>

<script>
export default{
	data(){
		return{
			msg:"Hello ,普通会员"
		}
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
*,*:before,**:after{
	box-sizing:inherti;
}
#member{
	width:100%;
	
	overflow: hidden;
	
}
 #head{
	width: 100%;
	height: 6.325rem;
	position: relative;
	background: linear-gradient(135deg,#fdad72 0,#fc8b53 280px);
}
div{
	display: black;
}
#head .text{
 	text-align: center;
 	color: #fff;
 	height: 1.0rem;
 	line-height: 1.0rem;
 	padding: 10px 15px 0;
 	font-size: 16px;
 	font-weight: 400;
 	
 }
 /*h3{
 	display: block;
 	-webkit-margin-before:1em;
 	-webkit-margin-after:1em;
 	-webkit-margin-start:1em;
 	-webkit-margin-end:1em;
 }*/
 #head .half-enter{
 	height: 3.25rem
 }
#member .clearfix:after ,#member .clearfix:before{
	display: table;
	content: "";
	line-height: 0;
}

#head .half-enter .col-6{
	text-align: center;;
	color: #fff;
	font-size: 0.3rem
}
#member .col-6{
	float: left;
	width: 50%;
}
a,input,button,textarea,fieldset,ul,span{
	-webkit-tap-highlight-color:rgba(255,255,255,0);
	outline: none;
}
#member .half-enter .col-6 .wrap{
	padding: 0 0.75rem;
}
#member .half-enter .wrap{
	display: inline-block;
	position: relative;
	line-height: 1;
}
#member .i-member-center,#member .i-offline-active{
	width: 40px;
	height: 40px;
}
#member .icon{
	display: inline-block;
	background: url(../../../static/imghuiyuan/sprt.png) no-repeat -1.25rem 0;
	background-size: 5.0rem auto;
}
#member .float-label span{
	position: relative;
	z-index: 3;
}
#member .float-label{
	font-style: normal;
	color: #fff;
	font-size: 0.225rem;
	background-color: #281e29;
	border-radius: 10px;
	position: absolute;
	white-space: nowrap;
}
#member .float-label:after{
	position: absolute;
	z-index: 2;
	bottom: -4px;
	left: 7px;
	display: inline-block;
	width: 0;
	height: 0;
	content: "";
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #281e29;
}
#member .i-offline-active{
	background-position: 0 0;
}
i{
	font-style: normal;
}
#member .quarter-enter{
	width: 100%;
	margin-top: 15px;
	padding: 0 15px;
	border-radius: 3px 3px 0 0;
	position: absolute;
	left: 0;
	top: 3.0rem;
	z-index: 2;
}

#member .quarter-enter .row{
	width: 92%;
	/*padding: 10px 0;*/
	height: 2.0rem;
	background-color: #fff;
	box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
}
.clearfix{
	clear: both;
}
/*ul{
	display:block;
	-webkit-margin-before:1em;
	-webkit-margin-after:1em;
	-webkit-margin-start:1em;
	-webkit-margin-end:1em;
	-webkit-padding-start:1em;
}*/
#member .border-1px.border-r,#member .border-1px.border-r:after{
	border-right: 1px solid #f0f0f0;
}
#member .quarter-enter .item:after{
	border-right-color: #f6f2ea!important;

}
#member .col-3{
	float: left;
	width: 25%;
}
#member .border-1px{
	position: relative;
	border:none!important;
}

li{
	display: list-item;
	text-align: -webkit-match-parent;
}
#member .quarter-enter .box{
	text-align: center;
	width: 100%;
	height: 100%;
	padding-bottom: 0.25rem;
}

#member .quarter-enter .box em{
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	color: #281e29;
	width: 100%;
	height: 0.5rem;
	/*position: relative;*/
}
#member .quarter-enter .box p{
	font-size: 12px;
	color: grey;
	height: 0.45rem;
	width: 100%;
}
#member .rights-enter{
	width: 97%;
	height: 2.075rem;
	background-color: #fff;
	margin-top: .625rem;
	
	z-index: 1;
	padding: 20px 15px 10px;
}
#member .rights-enter .item{
	width: 20%;
	height: 1.725rem;
	float: left;
	min-height: 1.225rem;

}
#member .rights-enter .box{
	display: inherit;
	text-align: center;
	color: grey;
	font-size: 11px;
}
a{
	text-decoration: none;
}
#member .rights-enter .vip-icon img{
	width: 42%;
	height: 100%
}
img{
	vertical-align: middle;
}
#member .rights-enter .vip-icon p{
	width: 100%;
	height: 0.4rem;
}
#member .border-1px.border-t{
	width: 100%;
	height: 1.0rem;
	border-top: 1px solid #f0f0f0;
	
}
#member .notice{
	margin-top: 0.25rem;
	background-color: #fff;
	display: -webkit-box;
	padding: 15px 15px;

}
#member .notice .head-title{
	height: 0.5rem;
	line-height: 0.4rem;
	font-size: 12px;
	color: #404040;
	padding-right: 5px;
	width: 1.375rem;
}
#member .notice .head-title .icon{
	width: 1.25rem;
	vertical-align: middle;
}
#member .i-notice{
	height: 0.5rem;
	background-position: -2.5rem 0;

}
#member .notice .list{
	-webkit-box-flex:1;
	height: 0.4rem;
	overflow: hidden;
	font-size: 0.3rem;
	color: #404040;
	padding-left: 5px;
	display: block;
	margin-top: 2px;
}
#member .border-1px.border-l{
	border-left: 1px solid #f0f0f0;
}
#member .notice li{
	line-height: 0.4rem;
}
#member .notice li a{
	display:inherit;
	line-height: 0.4rem;
	color: inherit;
}
#member .ellips{
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	font-family: Arial;
}
#member .picture{
	width: 100%
}
#member .picture img{
	width: 100%;

}
#member .ui-modal{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/*z-index: 11032;*/
	z-index: -1;
}
#member .ui-modal .pop{
	font-size: 14px;
	color: #21292b;
	width: 86%;
	max-width: 15.0rem;
	z-index: 11033;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 8%;
}
#member .ui-modal .content,#member .ui-modal .pop {
	text-align: center;
	background-color: #fcfcfc;
	border-radius: 4px;
	display: none;
}
#member .ui-modal .content{
	height: 10.15rem;
	width: 8.05rem;
	padding: 20px;
	overflow: hidden;
	
}
#member .icon-close-barcode{
	width: 3.75rem;
	height: 3.75rem;
	display: inline-block;

}
#member .icon-close-barcode img{
	width: 100%;
}

#member .ui-modal .content p{
	text-align: left;
	color: #21292b;
	font-size: 14px;
	line-height: 1.6;
}
#member .ui-modal .button.primary{
	background-color: #ff6800;
	color: #fff;
	font-size: 14px;

}
#member .ui-modal .button{
	margin-top: 0.75rem;
	border-radius: 2px;
	border:0;
	line-height: 1.1rem;
	width: 100%;
}
#member .ui-modal .close{
	position: absolute;
	bottom: -1.0rem;
	left: 50%;
	margin-left: -0.375rem;

}
#member .i-modal-close{
	width: 0.75rem;
	height: 0.75rem;
	background-position: -3.75rem 0;
}
#member .ui-modal .mask{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left:0;
	background-color: #000;
	z-index: 11031;
	opacity: 0.5;
}
#member .float-entrance{
	position: fixed;
	right: 0.375rem;
	bottom: 1.75rem;
	width: 1.625rem;
	height: 1.625rem;
	z-index: 1103;
}
#member .float-entrance a{
	display: inherit;
	width: 100%
}
#member .float-entrance a img{
	width: 100%;
	display: inherit;
	border-image: none;
}