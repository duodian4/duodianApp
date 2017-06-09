<template>
	<div class="my_yue">
		<div class="yyyyy">
			<div class="top1">
	            <i class="top1_icon" @click="mvpback()"></i>
	            <p>我的余额</p>
	            <span>修改密码</span>
	        </div>
	        <div class="yue_top2">
	        	<div class="yue_top2_in">
	        		<h1>0.00</h1>
	        		<p>当前余额（元）</p>
	        	</div>

	        </div>
	     </div> 
	</div>
</template>
<script type="text/javascript">
	export default{
        methods:{
            mvpback(){
                window.history.back();
            }
        }
    }
</script>
<style type="text/css" scoped>
	.my_yue{
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
	}
	.top1{
        height: 1.1rem;
        width: 100%;
        position: absolute;
        z-index: 101;
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
    }
    .top1 span{
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10px;
        text-align: right;
    }
    .yue_top2{
    	background-color: #ff712b;
    	height: 4.1rem;
    	z-index: 100;
    	
    }
    .yue_top2_in{
    	position: absolute;
    	top: 37%;
    	left: 37%;
    }
    .yue_top2_in h1{

    	text-align: center;
    }
   /* .yue_top2 h1{
    	text-align: center;
    	line-height: 4.1rem;
    }*/
</style>