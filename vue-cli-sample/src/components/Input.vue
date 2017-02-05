<template>
  <div id="input"> 
    <div id="textbox" >
      <p>入力欄</p>
      <input v-model="message" />
      <p>入力されているのは→「 {{ message }}」</p>
    </div>
    <div id="textarea" >
      <p style="white-space: pre">{{ text }}</p>
      <br>
      <textarea v-model="text" placeholder="入力してください。"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: '',
      text: ''
    }
  }
}
</script>