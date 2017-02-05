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
    <div id="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{checked}}</label>
    </div>
    <div id="radio">
      <input type="radio" id="radio-one" value="綾鷹" v-model="picked">
      <label for=" radio-one">綾鷹</label>
       <br>
      <input type="radio" id="radio-two" value="その他の何か" v-model="picked">
      <label for="radio-two">その他の何か</label>
      <br>
        <span>選ばれたのは、{{picked}}でした。</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: '',
      text: '',
      checked: true,
      picked: ''

    }
  }
}
</script>