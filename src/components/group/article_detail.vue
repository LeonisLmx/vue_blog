<template>
    <div>
        <div class="article_body">
            <h1>{{data.title}}</h1>
            <div class="line-title"><span class="time">创建时间:<span>2018-11-09 15:00:00</span></span><span class="read_num">阅读数：<span>{{data.readNum}}</span></span></div>
            <div class="article_con" id="articleC" v-html="data.content">
            </div>  
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '小牛互娱',
      data:{
        title: '',
        content: '',
        readNum: ''
      }
    }
  },
  mounted(){
    const _this = this;
    $.ajax({
        url:'http://localhost:8888/user/achieve',
        success:function(data){
            console.log(data);
            _this.data = data.body;
        }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .article_body{
        width: 600px;
        margin: 0 auto;
    }
    .line-title{
        color: #777;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
    }
    .time{
        display: inline-block;
        float: left;
    }
    .read_num{
        display: inline-block;
        float: right;
    }
    .article_con{
        color: #777;
        line-height: 1.5rem;
    }
</style>

