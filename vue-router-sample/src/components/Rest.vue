<template>
  <div class="rest">
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
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
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
</style>
