<template>
  <div class="wrapper">
    <ul class="nav-list">
      <router-link 
        tag='li'
        :key='item.label'
        :to="{name: item.name}" 
        @click.native='handelChange(index)' 
        :class="{active: nowIndex === index}" 
        v-for='(item,index) in navList'>
        {{item.label}}
      </router-link>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'navbar',
    data() {
      return {
        navList: [
          {
            label: '组件',
            name: 'content',
          },
          {
            label: '博客',
            name: 'blog',
          },
          {
            label: '后台',
            name: 'backStage',
          },
        ],
        nowIndex: 0,
      }
    },
    methods: {
      handelChange(index) {
        this.nowIndex = index
      }
    }
  }
</script>
<style scoped lang='scss'>
  .wrapper {
    height: 100%;
    display: flex;
    .nav-list {
      display: flex;
      height: 100%;
      li {
        box-sizing: content-box;
        height: 63px;
        cursor: pointer;
        padding: 0 20px;
        font-size: 14px;
        line-height: 63px;
        border-bottom: 2px solid #fff;
        transition: all .3s ease;
        &:hover {
          border-color: #2d8cf0;
          color: #2d8cf0;
        }
      }
      .active {
        border-color: #2d8cf0;
        color: #2d8cf0;
      }
    }
  }
</style>