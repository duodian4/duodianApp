<template>
	<div id="home">
		<div class="header">
			<div class="J_ToolbarBox">
				<div class="location">
					<label for="">送至:</label>
					<span class="address">
						<span>昌平区</span>
						<i></i>
					</span>
					<span class="more">
						<span></span>
					</span>
				</div>
			</div>
			<div class="menu">
				<em class="line"></em>
				<router-link to="/home/duodianmarket">									
						多点超市
						<img src="https://img.dmallcdn.com/bizItem/201612/c61ded35-a9f4-49a0-9fc3-193b6bafefec" alt="">				
				</router-link>
				<router-link to="/home/globalselect">				
						全球精选
						<img src="https://img.dmallcdn.com/bizItem/201705/7a3051ea-c095-418b-8f7f-d2f3ca587e5a" alt="">
				</router-link>
				<router-view></router-view>
			</div>
			
		</div>
		
	</div>
</template>

<script>
export default{

}
</script>

<style scoped>
/*----------头部----------*/
.header{
	width: 100%;
	background-color: #fff;
}
.J_ToolbarBox{
	width: 100%;
}
.location{
	height: 1.1rem;
	line-height: 1.1rem;
	font-size: 0.35rem;
	color: #404040;
	margin-top: 0.125rem;
	padding-left: 0.425rem;
	position: relative;
}
.address i{
	display: inline-block;
	height: 0.5rem;
	width: 0.5rem;
	background: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136) no-repeat;
	background-position: -6.25rem -5.0rem;
	transform: rotate(-90deg);
	background-size: 10.0rem auto;
	position: absolute;
	top: 0.3rem;
}
.more{
	display: inline-block;
	width: 1.0rem;
	height: 1.1rem;
	position: absolute;
	top: 0;
	right: 0;
	line-height: 1.1rem;
	text-align: center;	
}
.more span{
	display: inline-block;
	width: 0.75rem;
	height: 0.75rem;
	
	background: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136) no-repeat;
	background-size: 10.0rem auto;
	background-position: 0 -1.25rem;
	margin-top: 0.15rem;
}
.menu{
	color: #333;
	font-size: 0.35rem;
	font-weight: normal;
	width: 100%;
	height: 1.0rem;
	position: relative;
}
.menu a{
	display: inline-block;
	width: 1.4rem;
	line-height: 0.625rem;
	text-align: center;
	margin: 0 0.425rem 0 0.425rem;
	padding: 0.25rem 0 0.125rem 0;
	position: relative;
	/*color: #ff8143;*/
}
.menu img{
	height: 0.3rem;
	position: absolute;
	top: 0;
	right:0;
	transform: translate3d(20%,0,0);
}
.line{
	display: inline-block;
	width: 1.4rem;
	height: 0.05rem;
	position: absolute;
	left: 0.425rem;
	bottom: 0;
	background-color: #ff8143;
	transform: translate3d(0px, 0px, 0px);
	transition: transform .3s ease-out;
	box-sizing: inherit;
}
.active{
	display: inline-block;
	width: 1.4rem;
	height: 0.05rem;
	position: absolute;
	left: 0.425rem;
	bottom: 0;
	background-color: #ff8143;
	transform: translate3d(95px, 0px, 0px);
	transition: transform .3s ease-out;
	box-sizing: inherit;
}
</style>