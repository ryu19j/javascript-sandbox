<template>
  <div class="memo">
    <button @click="getMemo">ボタン</button>
    <p>{{ memo.content }}</p>
  </div>
</template>

<script>
export default {
  name1: [],
  memo: [],
  data () {
    return {
      msg: 'Foo!!!!'
    }
  },
  created () {
    this.getMemo()
  },
  methods: {
    getMemo () {
      fetch('http://localhost:8080/memo/1').then((response) => {
        console.log(response.json())
        this.memo = response.data
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
