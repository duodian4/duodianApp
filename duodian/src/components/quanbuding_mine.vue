<template>
	<div class="youhui_mine">
		<div class="yyyyy">
				<div class="top1">
		            <i class="top1_icon" @click="mvpback()"></i>
		            <p>全部订单</p>
		            
		        </div>
		        <div class="top2">
		        	<router-link to="/quanbu_mine">
		        		<p>全部</p>
		        	</router-link>
		        	<router-link to="/daizhifu_mine" >
		        		<p>待支付</p>
		        	</router-link>
		        	<router-link to="/weiwanc_mine">
		        		<p>未完成</p>
		        	</router-link>
		        	<router-link to="/yiwanc_mine">
		        		<p>已完成</p>
		        	</router-link>
		        	<router-link to="/yiquxiao_mine">
		        		<p>已取消</p>
		        	</router-link>
		        </div>
		        <hr>
		        <router-view></router-view>
	    </div>
	</div>
</template>
<script type="text/javascript">
	export default{
        methods:{
            mvpback(){
               this.$router.push("/mine");
            }
        }
    }
</script>
<style type="text/css" scoped>
	.youhui_mine{
		 position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        font-size: 16px;
      
        color: white;
	}
	.yyyyy{
		  position: relative;
		  height: 100%;
	}
	.youhui_mine{
		font-size: 16px;
	}
	.top1{
        height: 1.1rem;
        width: 100%;
        /*position: absolute;*/
        /*z-index: 101;*/
    }
    .top1_icon{
         background-position: -2px -151px
    }
    .top1_icon{
        position: absolute;
        left: 10px;
        top: 5px;
        height: 30px;
        width: 30px;
        border:1px dashed green;
        border-radius: 50%;
        background-color: #333;
        background-image: url(../../static/img/sprt.png);
        background-repeat: no-repeat;
       background-size: 400px auto;
    }
    .top1 p{
        text-align: center;
        line-height:1.1rem; 
        color: #333;
    }
    .top1 span{
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10px;
        text-align: right;
        color: #ff712b;
    }
   	.top2{
   		display: flex;
   		justify-content: space-around;
   	}
</style>