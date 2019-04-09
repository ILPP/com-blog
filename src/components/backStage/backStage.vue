<template>
  <div class="wrap">
    <mavon-editor class='mark-down' v-model="content" @change="changeData"/>
    <div @click='pushEdit' class="btn">提交</div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        content: '',//编辑内容
        render: '',//markdown内容
      }
    },
    methods: {
      pushEdit() {
        this.$router.push({
          name: 'content',
          params: {
            content: this.render
          }
        })
        console.log(this.render)
        console.log(this.content)
      },
      changeData(value, render) {
        this.content = value
        this.render = render
      }
    }
  }
</script>
<style scoped lang='scss'>
  .wrap {
    .mark-down {
      width: 80%;
      height: 800px;
      margin: 0 auto;
    }
    .btn {
      width: 180px;
      height: 60px;
      margin: 30px auto;
      cursor: pointer;
      font-size: 30px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      background: #57c5f7;
      border-radius: 8px;
    }
  }
</style>