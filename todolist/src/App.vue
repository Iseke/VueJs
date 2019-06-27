<template>
  <div id="app">
    <h1 class="header">Iseke Posts</h1>
    <div v-for="post in allPost">
      <h2>{{post}}</h2>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: mapGetters(['allPost']),
  }
</script>

<style>
.header{
  color: blue;
  background-color: antiquewhite;
}
</style>
