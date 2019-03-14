<template>
  <div class="main">
    <div class="body">
      <div class="left-box">
        <div class="hot-type">
          <ul>
            <li v-bind:class="index==1 ? 'active' : ''">推荐</li>
            <li v-bind:class="index==2 ? 'active' : ''">综合</li>
            <li v-bind:class="index==3 ? 'active' : ''">沸点</li>
          </ul>
        </div>
        <div>
            <div class="box-first"></div>
            <div class="box-second"></div>
            <div class="box-third"></div>
        </div>
      </div>
      <app-aside></app-aside>
    </div>
  </div>
</template>
<script>
import Aside from "../home/aside.vue";
export default {
  name: "App",
  data() {
    return {
      index: 1
    };
  },
  components: {
    "app-aside": Aside
  },
  created(){

  },
  mounted(){

  },
  methods(){

  }
};
</script>
<style>
</style>