<template>
  <div id="app">
    <!-- <div style="height: 1rem; background-color: rgb(255,168,0);position: fixed;width: 100%;z-index: 999999;" @click="handleGoBack"><</div> -->
    <transition name="fade">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="child-view" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="child-view" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    };
  },
  methods:{
    handleGoBack(){
      this.$router.go(-1)
    }
  },
  watch: {
  }
};

</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

</style>
