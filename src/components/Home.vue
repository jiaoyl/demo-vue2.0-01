<template>
  <div class="container">
      <nav class="nav-header">
        <a href="/" class="logo">迪迪贷-vue版本</a>
        <a href="/" class="avatar"></a>
      </nav>
      <nav class="home-nav">
        <router-link
          v-for = "item in type"
          to="/list01"
          @click="openBookCategory(item.num)"
        >
          <i class="icon icon-sort"></i>
          <span>{{item.word}}</span>
        </router-link>
      </nav>
      <loading v-show="loading"></loading>
  </div>
</template>

<script>
//  import axios from 'axios'
//  import BookList from './Common/BookList.vue'
  import Loading from './Loading/Loading.vue'

  export default {
    data () {
      return {
        booklist: [],
        type: [
          {
            num: 1,
            word: '供应链'
          },
          {
            num: 2,
            word: '车贷'
          },
          {
            num: 3,
            word: '优企贷'
          },
          {
            num: 4,
            word: '体验标'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
