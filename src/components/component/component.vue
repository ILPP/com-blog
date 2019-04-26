<template>
  <div class="component">
    <Aside></Aside> 
    <Content></Content>
  </div>
</template>
<script type="text/javascript">
  import Aside from '../aside/aside.vue'
  import Content from '../content/content'
  import { backBlog } from '@/api/api'
  export default {
    name: 'com',
    components: {
      Aside,
      Content
    },
    created() {
      backBlog()
      .then(res => {
        console.log(res)
      })
    }
  }
</script>
<style scoped lang='scss'>
  .component {
    display: flex;
    background: #fff;
  }
</style>
