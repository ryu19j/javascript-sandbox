<template>
  <div class="rest">
    <button @click="update">ボタン</button>
    <ol>
      <li v-for="post in posts">
        {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    posts: [],
    errors: []
  }),
  methods: {
    update: function (event) {
      axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0
}
</style>
