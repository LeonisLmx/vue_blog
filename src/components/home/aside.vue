<template>
  <div>
        <div class="login-box">
                    <div>掘金 - juejin.im</div>
                    <div>一个帮助开发者成长的社区</div>
                    <div>现在注册，送你<span>45元</span>买小册</div>
                    <input type="text" placeholder="用户名" value="">
                    <input type="text" placeholder="手机号" value="">
                    <input type="password" placeholder="密码(不少于6位)">
                    <button>立即注册</button>
                    <div>第三方登录</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'aside',
  data () {
    return {
      visabled: false
    }
  }
}
</script>
<style>
@import '../../assets/css/aside.css'
</style>
                