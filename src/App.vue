<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:public_header="public_header"></router-view>
  </div>
</template>

<script>
import Header from './components/home/home.vue'
//import Aside from './components/home/aside.vue'

export default {
  name: 'App',
  data(){
    return{
        header_show:true
    }
  },
  components:{
      'app-header':Header
      //'app-aside':Aside
  },
  methods:{
    public_header:function(bool){
      this.header_show = bool;
    }
  }
}
</script>

<style>
</style>
