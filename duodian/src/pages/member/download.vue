<template>
	<div id="download">
		<div class="contain" >
			<section class="one">
				<img src="../../../static/imghuiyuan/tpage1.png" class="top">
				<div class="timer">
					<div class="digits">
						
					</div>
				</div>
				<div class="download tk">
					<a href="#" class="piwik_download">
						<img src="../../../static/imghuiyuan/tiphone.png" class="dowmloadBtn">
					</a>
				</div>
			</section>
			<section class="tow">
				<img src="../../../static/imghuiyuan/tpage2.png">
			</section>
			<section class="three">
				<img src="../../../static/imghuiyuan/tpage3.png">
			</section>
			<section class="three">
				<img src="../../../static/imghuiyuan/tpage4.png">
			</section>
		</div>
		<div class="zhezhao" id="tip_pop">
			<img src="../../../static/imghuiyuan/open-browser-tips.png" id="tippic">
		</div>
		<div class="backtop hide">
			<img src="../../../static/imghuiyuan/backTop.png">
		</div>
	</div>
	
</template>

<script>
export default{
	
}
</script>

<style>
#download{
	width: 100%;
 	z-index: 100;
 	position: relative;
	/*max-width: 18.75rem;*/
	margin: 0 auto;

}
#download div,#download section{
	display: block;

}
#download .one{
	position: relative;
}
#download .top{
	width: 100%;
	height: 100%;

}
#download img{
	width: 100%;
	height: 16.7rem;
	display: block;
	clear: both;
	vertical-align: top;
	border: 0;
}
#download .one .tk{
	position: absolute;
	top: 68%;
	left: 30%;
	width: 40%;
}
#download .one .tk img{
	height: 0.825rem;
	width: 3.75rem;
	display: block;
	clear: both;
	vertical-align: top;
	border: 0;
}
#download .load{
	width: 40%;
	cursor: pointer;
	margin: 0 auto;
}
#download .load a{
	outline: none;
	border: none;
}
a{
	text-decoration: none;
}
#download .two,#download .three{
	background: #FAFAFA;
}
#download .zhezhao{
	position: fixed;
	z-index: 98;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background:rgba(0,0,0,0.65);
	display: none;
}
#download .zhezhao img{
	float: right;
	max-width: 90%;
	margin-right: 5%;
	display: none;
}
#download .hide{
	/*display: none;*/
}
#download .backtop{
	position: fixed;
	bottom: 8%;
	right: 3.5%;
	z-index: 999;
}
#download .backtop img{
	width: 0.5rem;
	height: 0.825rem;
}
</style>