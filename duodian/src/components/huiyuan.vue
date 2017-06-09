<template>
    <div class="huiyuan" id="huiyuan">
        <div class="top1">
            <i class="top1_icon" @click="mvpback()"></i>
            <p>我的会员</p>
            <span>权益说明</span>
        </div>
        <div class="mvp_level">
            
        </div>
        <div class="mvp_detail">
            <a href="#">积分0</a>
            <a href="#">积分0</a>
        </div>
        <div class="mvp_huitiao">
            
        </div>
        <div class="mvp_welcome">
            <h6>会员专享权益</h6>
        </div>
        <div class="mvp_ul">
            <a href="#"><p></p><span>新手特权</span></a>
            <a href="#"><p></p><span>妩媚优惠</span></a>
            <a href="#"><p></p><span>生日特权</span></a>
            <a href="#"><p></p><span>积分加价格</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
            <a href="#"><p></p><span>评论奖励</span></a>
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
    .huiyuan{
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        font-size: 16px;
    }
    .top1{
        height: 1.1rem;
        width: 100%;
        position: relative;
        background-color: 
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
    .mvp_level{
        height: 5.75rem;
        width: 100%;
        background:url(../../static/img/vip-maintop-level-0.png) no-repeat;
        background-size: 100% 5.75rem;
    }


    .mvp_detail{
        display: flex;
        justify-content: space-around;
        height: 50px;
        line-height: 50px;

    }
    .mvp_huitiao{
        height: 10px;
        background-color: gray;
    }
    .mvp_welcome{
        height: 1.125rem;
        line-height: 1.125rem;
        text-indent: 0.5rem;
    }
    .mvp_ul{
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
    .mvp_ul a{
        display:block;
        height: 95px;
        width: 25%;
    }
    .mvp_ul a p{
        display:block;
        height: 30px;
        width: 38px;
        margin-left: 35px;
        background-image:url("../../static/img/sprt.png");
        background-size: 500px auto;
    }
    .mvp_ul a:nth-child(1) p{
        background-position:-5px -639px; 
    }
    .mvp_ul a:nth-child(2) p{
        background-position:-66px -639px; 
    }
    .mvp_ul a:nth-child(3) p{
        background-position:-129px -639px; 
    }
    .mvp_ul a:nth-child(4) p{
        background-position:-190px -639px; 
    }
    .mvp_ul a:nth-child(5) p{
        background-position:-254px -639px; 
    }
    .mvp_ul a:nth-child(6) p{
        background-position:-316px -688px; 
    }
    .mvp_ul a:nth-child(7) p{
        background-position:-250px -690px; 
    }
     .mvp_ul a:nth-child(8) p{
        background-position:-250px -690px; 
    }
     .mvp_ul a:nth-child(9) p{
        background-position:-250px -690px; 
    }
     .mvp_ul a:nth-child(10) p{
        background-position:-250px -690px; 
    }
    .mvp_ul a span{
        display: block;
        margin-top: 10px;
        color:gray;
    }
</style>