<template>
  <div>
    <div class="head-box">
      <div class="head">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" class="image-logo">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">沸点</a></li>
            <li><a href="#">小册</a></li>
            <li><a href="#">开源库</a></li>
            <li><a href="#">活动</a></li>
            <li><a href="#"><img src="https://conf.juejin.im/2018/mini-programs"></a></li>
            <li class="input-text">
              <img src="../../assets/image/search.svg"><input type="text" placeholder="搜索掘金" @click="searchInput()">
            </li>
            <li class="write-style">
                <img src="../../assets/image/book.svg" alt="book" style="vertical-align:middle">
                <span style="display:inline-block;margin-left:-4px">写文章</span>
            </li>
            |
            <li style="color:#007fff">
              <span>登录</span>
              ·
              <span>注册</span>
            </li>
          </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '小牛互娱'
    }
  },
  mounted(){
    // 对应取消input边框
    document.addEventListener('click',function(e){
       if(e.target.nodeName != 'INPUT'){
          $(".input-text").removeClass("active"); 
       }
    })
  },
  methods:{
      searchInput:function(){
        $("input-text input")
        $(".input-text").addClass("active");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/home.css';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
