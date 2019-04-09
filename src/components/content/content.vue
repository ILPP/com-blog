<template>
  <div class="content">
    <div v-highlight v-html="value"></div>
  </div>
</template>
<script type="text/javascript">
  // import '@/common/css/highlight.css'
  import marked from 'marked'
  export default {
    name: 'contents',
    data() {
      return {
        content: ` 123412 `,
        value: '',
      }
    },
    created() {
      if(this.$route.params.content) {
        this.value = marked(this.$route.params.content)
      }
    }
  }
</script>
<style scoped lang='scss'>
  .content {
    padding: 30px 0 0 50px;
    width: 70%;
  }
</style>