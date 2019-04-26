<template>
  <div class="edit-wrap">
    <div class="title">
      <p>标题</p>
      <input v-model='title' type="text" />
      <p style="margin-left: 100px;">类型</p>
      <input style="width: 150px;" v-model='type' type="text" />
    </div>
    <mavon-editor class='mark-down' v-model='value' @change="changeData"/>
    <div @click='pushEdit' class="btn">提交</div>
  </div>
</template>
<script type="text/javascript">
  import { uploadBlog } from '@/api/api'
  import axios from 'axios'
  export default {
    data() {
      return {
        title: '',//标题
        type: '博客',
        value: '',
        render: '',//markdown内容
      }
    },
    methods: {
      pushEdit() {
        uploadBlog(this.render,this.title,this.type)
        .then(res => {
          console.log(res)
        })
      },
      changeData(value, render) {
        window.localStorage.setItem('content',this.value)
        this.render = render
      }
    }
  }
</script>
<style scoped lang='scss'>
  .edit-wrap {
    height: 100%;
    background: #fff;
    .title {
      display: flex;
      align-items: center;
      height: 100px;
      margin-left: 10%;
      p {
        padding: 0;
        margin: 0;
        height: 40px;
        margin-right: 30px;
        font-size: 30px;
        line-height: 40px;
      }
      input {
        display: block;
        border: none;
        outline: none;
        height: 50px;
        width: 400px;
        border: 1px solid #999;
        padding-left: 20px;
        font-size: 24px;
        line-height: 50px;
        border-radius: 5px;
        &:focus {
          border-color: #03a9f4;  
          box-shadow: 0 0 3px #03a9f4;
        }
      }
    }
    .mark-down {
      width: 80%;
      height: 600px;
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