<template>
  <div class="message">
    <ul>
        <li v-for="message in messages">
            {{message.text}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      messages: [
        { text: 'one' },
        { text: 'two' },
        { text: 'three' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .message {color:#42b983;}
</style>