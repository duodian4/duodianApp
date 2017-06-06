<template>
<div id="duodianmarket">
	<div class="continer">
		<img src="https://img.dmallcdn.com/mIndex/201705/2f03ba3d-e807-4b22-b2e3-64a6518dec2e_750H" alt="">
	</div>
	<ul class="slider_list">
		<li>
			<img src="https://img.dmallcdn.com/mIndex/201705/6e509404-b3b4-4d77-bb21-6baf6b7b91b8_240x240H" alt="">
			<p>早晚市</p>
		</li>
		<li>
			<img src="https://img.dmallcdn.com/mIndex/201705/6e509404-b3b4-4d77-bb21-6baf6b7b91b8_240x240H" alt="">
			<p>早晚市</p>
		</li>
		<li>
			<img src="https://img.dmallcdn.com/mIndex/201705/6e509404-b3b4-4d77-bb21-6baf6b7b91b8_240x240H" alt="">
			<p>早晚市</p>
		</li>
		<li>
			<img src="https://img.dmallcdn.com/mIndex/201705/6e509404-b3b4-4d77-bb21-6baf6b7b91b8_240x240H" alt="">
			<p>早晚市</p>
		</li>
		<li>
			<img src="https://img.dmallcdn.com/mIndex/201705/6e509404-b3b4-4d77-bb21-6baf6b7b91b8_240x240H" alt="">
			<p>早晚市</p>
		</li>
	</ul>
	<div class="recommend">
		<img src="https://img.dmallcdn.com/mIndex/201705/93c4fa6c-8ec1-4d8f-9272-7fc8213555cb_750H" alt="">
	</div>
	<div class="fresh">
		<a href="" class="jijie">
			<img src="https://img.dmallcdn.com/mIndex/201705/deb2ab8b-90f9-4c77-8946-f09ef2a95cee_480x480H" alt="">
		</a>
		
	</div>
</div>
</template>

<script type="text/javascript">
export default{
	name:"duodianmarket", 
	data(){
		return {
			data:[]
		}
	},
	created(){
		this.$http.get('../static/data/home.json').then(res => {
			console.log(res.data.data.pageModules);
			this.data = res.data.data.pageModules
		})
	}

}
</script>

<style scoped>
#duodianmarket{
	position: absolute;
	top: 40px;
	left: 0;
	right: 0;
	bottom: 0;
}
.continer{
	width: 100%;
}
.continer img{
	display: block;
	width: 100%;
	height: 4.14rem;
}
.slider_list{
	width: 100%;
	border-top: 10px solid #f0f0f0;
	border-bottom: 10px solid #f0f0f0;
	padding-bottom: 0.175rem;
	display: flex;
}
.slider_list li{
	width: 20%;
	padding-bottom: 0.125rem;
	padding-top: 0.125rem;
	flex: 1;
}
.slider_list li img{
	display: block;
	height: 1.38rem;
}
.slider_list li p{
	line-height: 0.4rem;
	text-align: center;
	font-size: 0.3rem;
	color: #888;
}
.recommend{
	width: 100%;
}
.recommend img{
	width: 100%;
	display: block;
}
.fresh{
	width: 100%;
	overflow: hidden;
}
.jijie{

}
</style>