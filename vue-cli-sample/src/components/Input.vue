<template>
  <div id="input" >
    <p>入力欄</p>
    <input v-model="message" />
    <p>入力されているのは→「 {{ message }}」</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: ''
    }
  }
}
</script>