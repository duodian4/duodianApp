<template>
	<div id="integral">
		<div class="headBar">
			<div class="backtrack" @click="backtrack()">
				<span class="J_Back">
					<i></i>
				</span>
			</div>
			<span class="J_Title">签到光荣榜&nbsp;钜惠立享</span>
			<div class="scart">
			<router-link to="../cart" tag="span" class="J_Cart">
				<i></i>
					<span class="J_CartNum"></span>
				</router-link>
			</div>
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

 #integral{
 	width: 100%;
 	height: 100%;
 	z-index: 100;
 	position: fixed;
 	overflow: hidden;
 	background-color: white;
 }
 #integral .headBar{
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
#integral .headBar .backtrack{
	width: 1.6rem;
	height: 1.1rem;
	position: absolute;
	left: 0;
}
#integral .headBar .backtrack .J_Back{
	display: block;
	width: 100%;
	height: 100%;
	cursor: pointer;
}
#integral .headBar .backtrack .J_Back i{
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
#integral .J_Title{
	display: block;
	width: 60%;
	margin: 0 20%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	color: grey;
}
#integral .scart{
	height: 1.1rem;
	width: 1.6rem;
	position: absolute;
	right: 0;
	top: 0;
	padding-left: 0.25rem;
}
#integral .J_Cart{
	display: block;
	width: 100%;
	height: 100%;
}
#integral .J_Cart i{
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
#integral .scart .J_CartNum{
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





</style>