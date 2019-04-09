<template>
  <div class="aside">
    <ul class="aside-list">
      <li @click='handelChange(index)' :class="{'active': index===nowIndex}" v-for='(item,index) in asideList'>{{item.label}}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Aside',
    data() {
      return {
        nowIndex: 0,
        asideList: [
          {
            label: '登录界面'
          },
          {
            label: '下拉刷新'
          },
          {
            label: '上拉加载'
          },
          {
            label: '微信授权登录'
          },
          {
            label: '上传图片'
          }
        ]
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
  .aside {
    width: 20%;
    .aside-list {
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        z-index: 1;
        background: rgb(220, 222, 226);
      }
      li {
        padding: 14px 24px;
        font-size: 14px;
        height: 22px;
        line-height: 22px;
        position: relative;
        cursor: pointer;
        &:hover {
          color: #2d8cf0;
        }
      }
      .active {
        color: #2d8cf0;
        &::after {
          content: "";
          display: block;
          width: 2px;
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: 0px;
          background: #2d8cf0;
        }
      }
    }
  }
</style>