<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="getPostcodes">I am your button</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      prospectsAndCustomers: [],
      postcodes : []
    }
  },

  methods: {
    getPostcodes : function(prospectsAndCustomers) {
      return this.postcodes = this.prospectsAndCustomers.map(prospectsAndCustomer => prospectsAndCustomer.Postcode)
    }
  },

  mounted() {
    fetch('./ImportedData/customers2020.json')
    .then(res => res.json())
    .then(prospectsAndCustomers => this.prospectsAndCustomers = prospectsAndCustomers )
  },

name: 'App',
  components: {
    // HelloWorld
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




//  {
//   "postcodes" : ["OX49 5NU", "M32 0JG", "NE30 1DP"]
//     }