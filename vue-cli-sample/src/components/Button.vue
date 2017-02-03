<template>
  <div class="buttons">
    <button @click="click">ボタン</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    click: function (event) {
      this.msg = 'Button clicked!'
    }
  },
  data: function () {
    return {
      msg: ''
    }
  }
}
</script>