<template>
  <div class="hello">
    <button @click="count">ボタン</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    count: function (event) {
      this.counter += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
