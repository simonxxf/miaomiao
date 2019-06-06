<template>
  <div>
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default {
  components:{
     Header,
    TabBar,
    Login,
  },
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style lang='stylus' scoped>
</style>