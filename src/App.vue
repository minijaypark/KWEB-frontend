<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo"><span></span></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :selectedKeys="[$route.path]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/"
          ><router-link to="/">Home</router-link></a-menu-item
        >
        <a-menu-item key="/articles"
          ><router-link to="/articles">Articles</router-link></a-menu-item
        >
        <a-button :style="{ position: 'absolute', right: '15px', top: '15px' }"
          ><router-link to="/login">Sign in</router-link></a-button
        >
      </a-menu>
    </a-layout-header>
    <a-layout-content class="content">
      <div id="app">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'app',
  data() {
    return {
      currentMenu: '',
    };
  },
});
</script>
<style>
.layout {
  height: 100vh;
}
.content {
  padding: 0 50px;
}
#app {
  height: 95%;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
#components-layout-demo-top .logo span {
  color: white;
  font-size: 50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
