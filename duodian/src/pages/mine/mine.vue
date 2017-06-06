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
					<li>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">余额</span>
					</li>
					<li>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">积分</span>
					</li>
					<li>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">卡包</span>
					</li>
					<li>
						<span class="top1_2_1">0.00</span>
						<span class="top1_2_2">优惠券</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="saoma">
			<div class="saoma_img"></div>
<<<<<<< HEAD
			<div>
				<span>会员专属码</span>
			</div>
		</div>
=======
			<div class="saoma_zi">
				<span>会员专属码</span>
			</div>
		</div>
		<div class="huitiao">
			
		</div>
>>>>>>> ba08f7e50de9acc16366ae90ce5b2035a1219707
	</div>
</template>

<script>
export default{

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
<<<<<<< HEAD
		background:url(../../assets/mine-top-img.png) no-repeat;
=======
		background:url(../../../static/img/mine-top-img.png) no-repeat;
>>>>>>> ba08f7e50de9acc16366ae90ce5b2035a1219707
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
<<<<<<< HEAD
		background:url(../../assets/mine-level-0.png) no-repeat;
=======
		background:url(../../../static/img/mine-level-0.png) no-repeat;
>>>>>>> ba08f7e50de9acc16366ae90ce5b2035a1219707
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
<<<<<<< HEAD
		border: 1px dashed green;
=======
	
>>>>>>> ba08f7e50de9acc16366ae90ce5b2035a1219707
		height: 1.45rem;
		width: 100px;
		position: absolute;
		right: 0.5rem;
<<<<<<< HEAD
		top: 0.75rem;
	}
	.saoma_img{
		background:url(../../assets/sprt.png);
=======
		top: 0.275rem;
	}
	.saoma_img{
		background:url(../../../static/img/sprt.png) 
		17px -939px;
	}
	.saoma_zi{
		text-align: center;
		color: white;
		font-size: 14px;
	}
	.huitiao{
		height: 2.0rem;
		border: 1px dashed green;
		border-top: 10px solid #f0f0f0;
>>>>>>> ba08f7e50de9acc16366ae90ce5b2035a1219707
	}
</style>