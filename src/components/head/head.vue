<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../assets/logo.png" alt="" />
      <span>清欢</span>
    </div>
    <navbar></navbar>
  </div>
</template>
<script type="text/javascript">
  import Navbar from '@/components/navbar/navbar'
  export default {
    name: 'Head',
    components: {
      Navbar
    }
  }
</script>
<style scoped lang='scss'>
  .wrap {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 0 2.5%;
    height: 65px;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
    .logo {
      display: flex;
      align-items: center;
      img {
        display: block;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      span {
        display: block;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        color: #333;
      }
    }
  }
</style>