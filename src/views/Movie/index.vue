<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
      <div id="content">
        <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
                <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
                <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
      </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import { messageBox } from "../../components/JS/index.js"
export default {
  name:"Movie",
  components:{
    Header,
    TabBar
  },
  props:{},
  data(){
    return {
    }
  },
  mounted(){
    setTimeout(()=>{
        this.axios.get('/api/getLocation').then((res)=>{
        var msg = res.data.msg

        if(msg === "ok"){
          const nm = res.data.data.nm
          const id = res.data.data.id

          console.log(this.$store.state.city.id,id) //状态管理中的id 是字符串  === 会比较类型   == 就不用检测类型
          if(this.$store.state.city.id == id){
            return
          }else{
              messageBox({
              title:"定位",
              content:nm,
              cancle:"取消",
              ok:"切换定位",
              handleOk(){
                console.log(2)
                window.localStorage.setItem('nowNm',nm) //把定位到的城市 存到vuex 
                window.localStorage.setItem('nowId',id)
                window.location.reload() //重新加载页面
              }

            })
          }
         
        }
      })
    },3000)
  }
}
</script>
<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}
</style>