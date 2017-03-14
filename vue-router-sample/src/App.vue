<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/" class="button is-primary">home</router-link>
      <router-link to="/foo" class="button is-primary">foo</router-link>
      <router-link to="/bar/bar" class="button is-primary">bar</router-link>
      <router-link to="/memo" class="button is-primary">memo</router-link>

    </p>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0
}
</style>
