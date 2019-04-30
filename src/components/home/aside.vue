<template>
    <div>
      <div class="login-box">
                  <div class="first-title">掘金 - juejin.im</div>
                  <div class="second-titile">一个帮助开发者成长的社区</div>
                  <div class="third-title">现在注册，送你<span>45元</span>买小册</div>
                  <input type="text" placeholder="用户名" value="">
                  <input type="text" placeholder="手机号" value="">
                  <input type="password" placeholder="密码(不少于6位)">
                  <button @click="noButton()">立即注册</button>
                  <div class="other-login"><span>第三方登录:</span><img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ2cHgiIGhlaWdodD0iNDZweCIgdmlld0JveD0iMCAwIDQ2IDQ2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjEgKDI4MjE1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX0dpdEh1YjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i54q25oCBIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5rOo5YaMIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzU4LjAwMDAwMCwgLTYwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1OC4wMDAwMDAsIDYwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMzE0IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIHg9IjAiIHk9IjAiIHdpZHRoPSI0NiIgaGVpZ2h0PSI0NiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUsMjMuNDMwNzU3NiBDNSwzMS4xMzE3NDk3IDEwLjEwMjQ5MjMsMzcuNjY0MjcxMiAxNy4xNzk1MDgsMzkuOTY5MTExNyBDMTguMDcwNTU4Miw0MC4xMjk2MTU5IDE4LjM5NTI3MjIsMzkuNTkxMzkxOCAxOC4zOTUyNzIyLDM5LjEyOTEzOTcgQzE4LjM5NTI3MjIsMzguNzE2MTA4OCAxOC4zNzk5NjU4LDM3LjYxOTMzIDE4LjM3MTIxOTMsMzYuMTY1MTYxOCBDMTMuNDE3NDE3NiwzNy4yMTgwNjk1IDEyLjM3MjIxMDMsMzMuODI4MjIwNSAxMi4zNzIyMTAzLDMzLjgyODIyMDUgQzExLjU2MjA2NTMsMzEuODE0NDI3NiAxMC4zOTQ0MDY5LDMxLjI3ODM0MzYgMTAuMzk0NDA2OSwzMS4yNzgzNDM2IEM4Ljc3NzM5Njc3LDMwLjE5NzYxNTIgMTAuNTE2ODU3OSwzMC4yMTkwMTU4IDEwLjUxNjg1NzksMzAuMjE5MDE1OCBDMTIuMzA0NDI0OCwzMC4zNDIwNjkgMTMuMjQ0Njc0MSwzMi4wMTU1OTI5IDEzLjI0NDY3NDEsMzIuMDE1NTkyOSBDMTQuODMzMjU4MSwzNC42Nzg4OTI4IDE3LjQxMzQ3NywzMy45MDk1NDI2IDE4LjQyODA3MTUsMzMuNDYzMzQwOSBDMTguNTg5ODgxOSwzMi4zMzc2NzE0IDE5LjA1MDE2NjcsMzEuNTY5MzkxMiAxOS41NTg1NTczLDMxLjEzMzg4OTggQzE1LjYwNDA0MzgsMzAuNjk0MTA4MiAxMS40NDYxNzQxLDI5LjE5ODIwOSAxMS40NDYxNzQxLDIyLjUxOTA5MzYgQzExLjQ0NjE3NDEsMjAuNjE2NTgzNyAxMi4xNDA0Mjc5LDE5LjA1OTY5MjggMTMuMjc5NjYwMSwxNy44NDIwMDA5IEMxMy4wOTU5ODM1LDE3LjQwMTE0OTMgMTIuNDg0ODIxNSwxNS42MjgxMTI3IDEzLjQ1NDU5MDIsMTMuMjI5MTA5OCBDMTMuNDU0NTkwMiwxMy4yMjkxMDk4IDE0Ljk0OTE0OTIsMTIuNzYwNDM3NSAxOC4zNTE1Mzk2LDE1LjAxNjA1NjcgQzE5Ljc3MTc1MzMsMTQuNjI4NzA2NSAyMS4yOTU4MzE4LDE0LjQzNjEwMTUgMjIuODEwMDcwNSwxNC40Mjg2MTEzIEMyNC4zMjMyMTU4LDE0LjQzNjEwMTUgMjUuODQ2MjAxLDE0LjYyODcwNjUgMjcuMjY4NjAxMywxNS4wMTYwNTY3IEMzMC42Njg4MDUxLDEyLjc2MDQzNzUgMzIuMTYxMTc3NCwxMy4yMjkxMDk4IDMyLjE2MTE3NzQsMTMuMjI5MTA5OCBDMzMuMTMzMTMyOCwxNS42MjgxMTI3IDMyLjUyMTk3MDgsMTcuNDAxMTQ5MyAzMi4zMzkzODc1LDE3Ljg0MjAwMDkgQzMzLjQ4MDgwNjQsMTkuMDU5NjkyOCAzNC4xNjk1OTM2LDIwLjYxNjU4MzcgMzQuMTY5NTkzNiwyMi41MTkwOTM2IEMzNC4xNjk1OTM2LDI5LjIxNTMyOTQgMzAuMDA1MTY0LDMwLjY4ODc1ODEgMjYuMDM4NjI0MSwzMS4xMTk5Nzk0IEMyNi42NzcxMTg5LDMxLjY1ODIwMzUgMjcuMjQ2NzM1LDMyLjcyMTgxMTUgMjcuMjQ2NzM1LDM0LjM0ODI1NDIgQzI3LjI0NjczNSwzNi42Nzc3MDUzIDI3LjIyNDg2ODgsMzguNTU3NzQ0NyAyNy4yMjQ4Njg4LDM5LjEyOTEzOTcgQzI3LjIyNDg2ODgsMzkuNTk1NjcxOSAyNy41NDYzMDI4LDQwLjEzODE3NjEgMjguNDQ5Mzc5NSwzOS45NjgwNDE3IEMzNS41MjA5Mjg2LDM3LjY1Nzg1MSA0MC42MTkwNDc2LDMxLjEyOTYwOTcgNDAuNjE5MDQ3NiwyMy40MzA3NTc2IEM0MC42MTkwNDc2LDEzLjgwMzcxNDkgMzIuNjQ0NDIxOCw2IDIyLjgwNzg4MzgsNiBDMTIuOTc0NjI1OCw2IDUsMTMuODAzNzE0OSA1LDIzLjQzMDc1NzYgWiIgaWQ9IkZpbGwtMyIgZmlsbD0iIzE2MTYxNCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="><img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"></div>
      </div>
      <div class="hot-tag">
          <div><span class="title-head">热门标签</span><a class="view-all" href="https://juejin.im/subscribe/all" target="_blank">查看全部</a></div>
          <ul v-for="list in tagLists">
            <li v-for="entity in list"><a :href="'https://juejin.im/tag/' + entity" target="_blank">{{entity}}</a></li>
          </ul>
      </div>
      <div class="mail-box">
          <textarea class="guess_notice"  name="notice" placeholder="请留下你的宝贵意见,如有需要，我会第一时间联系您" id="" style="width:90%;height:60px;padding:5px;margin-bottom:10px" maxlength="255"></textarea>
          <div class="advice-tips">意见不能为空噢。</div>
          <input class="guess_email" type="text" placeholder="您的邮箱或者电话" style="width:90%;height:20px;line-height:20px">
          <div style="width:100%;text-align:center;margin:10px auto"><button @click="sendNotice()" style="width:50%;margin:0 auto">发送通知</button></div>
      </div>
      <div class="order-ranking">
          <div class="rank-title">文章发布排行榜</div>
          <div class="list-rank">
              <a v-for="entity,i in rankList" :href="'/#/author?author=' + entity" target="_blank">{{i + 1}} {{entity}}</a>
          </div>
          <div class="tips">PS:<br>本排名只是针对本网站的数据拉取，仅供娱乐参考😄</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'aside',
  data () {
    return {
      visabled: false,
      tagLists:[
        ["架构","开源"],
        ["算法","GitHub"],
        ["面试","代码规范"],
        ["产品","掘金翻译计划"]
      ],
      rankList: [
          "liumingxin",
          "liumingxin",
          "liumingxin",
          "liumingxin",
          "liumingxin"
      ],
      flag: true,
      num: 0
    }
  },
  mounted(){
    var _this = this;
    $(".other-login img").click(function(){
        window.alert("该功能还未开放");
    }),
    // 对应取消input边框
    document.addEventListener('click',function(e){
       if(e.target.nodeName == 'TEXTAREA'){
          $(".guess_notice").css("margin-bottom","10px");
          $(".advice-tips").hide();
       }
    }),
    $.ajax({
        url: url + '/article/giveLike?start=0&end=9&index=-1',
        success:function(data){
            _this.rankList = data.body;
        }
      })
  },
  methods:{
    noButton:function(){
        window.alert("该功能还未开放");
      },
    sendNotice:function(){
      var _this = this;
      _this.setTimeInterval();
      if(_this.flag){
        if($(".guess_notice").val() == '' || $(".guess_notice").val() == undefined){
          _this.flag = false;
          $(".guess_notice").css("margin-bottom","0px");
          $(".advice-tips").show();
          return;
        }
        _this.flag = false;
        var content = $(".guess_notice").val() + "</br>" + $(".guess_email").val()
        $.ajax({
                url: url + '/user/sendEmail?content=' + content,
                success:function(data){
                  console.log(data)
                if(data.body){
                  window.alert("发送成功了,感谢你的宝贵建议");
                }else{
                  window.alert("很抱歉，同一IP地址请5分钟以后再试");
                }
            }
        })
      }
    },
    setTimeInterval:function(){
      var _this = this;
      setTimeout(function(){
          _this.flag = true;
          _this.num = 0;
      },5000)
      _this.num++;
      if(_this.num >= 2){
        window.alert("5秒之内不能重复点击")
      }
    }
  }
}
</script>
<style>
@import '../../assets/css/aside.css';

  .tips{
    color: red;
    margin-top: 20px
  }
</style>
                