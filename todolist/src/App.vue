<template>
  <div id="app">
    <h1 class="header">Iseke Posts</h1>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },

  }
</script>

<style>
.header{
  color: blue;
  background-color: antiquewhite;
}
</style>
