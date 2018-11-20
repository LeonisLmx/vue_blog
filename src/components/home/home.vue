<template>
  <div id="scroll">
    <div class="head-box">
      <div class="head">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" class="image-logo">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="https://juejin.im/activities" target="_blank">动态</a></li>
            <li><a href="https://juejin.im/books" target="_blank">小册</a></li>
            <li><a href="https://juejin.im/repos" target="_blank">开源库</a></li>
            <li><a href="https://juejin.im/events/all" target="_blank">活动</a></li>
            <li class="input-text">
              <img src="../../assets/image/search.svg" @click="searchArticle()"><input type="text" placeholder="搜索本站" @click="searchInput()" class="input_val">
            </li>
            <li class="write-style">
                <img src="../../assets/image/book.svg" alt="book" style="vertical-align:middle">
                <a style="display:inline-block;margin-left:-4px;color:#007fff" href="https://mp.csdn.net/postedit" target="_blank">写文章</a>
            </li>
            |
            <li style="color:#007fff" @click="noButton()">
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
        // $("input-text input")
        $(".input-text").addClass("active");
      },
      searchArticle:function(){
        // 事件发射，搜索方法
        this.$root.eventHub.$emit('search_article',$(".input_val").val())
      },
      noButton:function(){
        window.alert("该功能还未开放");
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
