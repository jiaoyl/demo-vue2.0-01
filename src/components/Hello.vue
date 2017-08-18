<template>
  <div id="example">
    <p class="fr">Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <a>ssssssss</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: Date(),
      font_size: '20'
    }
  },
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      // var b=this.message.split('').reverse().join('')
      let target = document.body.scrollTop - window.screen.height - 80
      return target
    }
  },
//  mounted: {
//    var ss = document.getSelection('a')
//    ss.style.fontSize = this.font_size + 'px'
//  },
  methods: {
    aClick: function () {
      var ss = document.getSelection('a')
      alert('ss')
      ss.click(function () {
        alert('111')
        return this.message
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
