<template>
    <div>
        
    </div>
</template>

<script>

export default {
  name: 'App',
  created:function () {
    this.$emit('public_header', false);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
