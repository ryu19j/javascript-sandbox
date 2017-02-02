<template>
  <div id="app">
    <hello></hello>
    <list></list>
    <Button></Button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import List from './components/List'
import Button from './components/Button'

export default {
  name: 'app',
  components: {
    Hello,
    List,
    Button
  }
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
</style>
