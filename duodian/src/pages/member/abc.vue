<template>
	<div id="centre">
		<div class="half-enter row clearfix">
			<span class="item col-6">
				<span class="wrap J_MemberCenter J_ClickTrace" data-traceevent="点击会员中心">
					<i class="icon i-member-center"></i>
					<p>{{msg}}</p>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			msg:"会员中心"
		}
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
#centre{
	height: 50px;
	width: 50px;
	background-color: yellow;
}
 .centre .half-enter{
 	
 	height: 55px;
 	background: linear-gradient(135deg,#fdad72 0,#fc8b53 280px);
 }
 .clearfix{
 	clear: both;
 }
 #member.flearfix:after,#member .clearfix:before{
 	display: table;
 	content: "";
 	line-height: 0;
 }
#member .half-enter .col-6{
	text-align: center;
	color: #fff;
	font-size: 12px;
}
#member .col-6{
	float: left;;
	width: 50%;
}
#member .half-enter .col-6 .wrap{
	padding: 0 30px;
}

#member .half-enter .J_MemberCenter{
	height: 53px;
	width: 48px;
}
#member .half-enter .J_OfflineActive{
	height: 53px;
	width: 60px;
}
#member .half-enter .wrap{
	display: inline-block;
	position: relative;
	line-height: 1;
}

span{
	-webkit-tap-highlight-color:rgba(255,255,255,0);
	outline: none;
}
#member .i-member-center{
	background-position: -50px 0;
}
#member .i-member-center,#member .i-offline-active{
	height: 40px;
	width: 40px;
}
.centre .icon{
	display: inline-block;
	background: url(../../../static/imghuiyuan/sprt.png) no-repeat -50px 0;
	background-size: 200px auto;
}
#member .i-offline-active{
	background-position: 0 0;
}

i{
	font-style: normal;
}
#member .float-label span{
	position: relative;
	z-index: 3;
}
#member .float-label{
	font-style: normal;
	color: #fff;
	font-size: 9px;
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
	height: 0;
	content: "";
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-left: 5px solid #281e29;
}

</style>