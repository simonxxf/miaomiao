<template>
  <div>
    <Header></Header>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar'
export default {
  components:{
     Header,
    TabBar
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