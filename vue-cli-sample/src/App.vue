<template>
  <div id="app">
    <hello></hello>
    <list></list>
    <Button></Button>
    <Input></Input>
  </div>
</template>

<script>
import Hello from './components/Hello'
import List from './components/List'
import Button from './components/Button'
import Input from './components/Input'

export default {
  name: 'app',
  components: {
    Hello,
    List,
    Button,
    Input
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
