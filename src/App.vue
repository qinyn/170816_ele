<template>
  <div>
    <ele-header/>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {

    mounted () {
      // 使用vue-resource发送ajax请求express提供的接口
      this.$http.get('/api/seller')
        .then(response => {
          const result = response.data
          console.log('vue-resource', result)
        })
      // 使用axios发送ajax请求mockjs提供的接口
      axios.get('/api2/seller')
        .then(response => {
          const result = response.data
          console.log('axios', result)
        })

      // 通知vuex去ajax请求获取seller数据, 并更新状态
      this.$store.dispatch('requestSeller')
    },

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      float left
      width:33.33333%
      text-align center
      font-size 14px
      color rgb(77,85,93)
      a
        display block
        &.router-link-active
          color: rgb(240,20,20)
</style>
