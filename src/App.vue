<template>
  <div id="app">
    <head-component></head-component>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from '@/components/head/head'
export default {
  name: 'App',
  components: {
    HeadComponent: Head
  }
}
</script>

<style>
  #app {
    padding-top: 80px;
    background: #f7f7f7;
  }
</style>
