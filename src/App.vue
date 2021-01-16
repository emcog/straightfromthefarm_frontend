<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="getPostcodes">01 Return postcodes</button>
    <button v-on:click="singleCustomer">02 GET postcodes to api</button>
    <button v-on:click="postData('http://api.postcodes.io/postcodes', {'postcodes' : ['OX49 5NU', 'M32 0JG', 'NE30 1DP']})">03 POST postcodes to api</button>
    <!-- <button v-on:click="batchPostcode('http://api.postcodes.io/postcodes', {'postcodes' : ['OX49 5NU', 'M32 0JG', 'NE30 1DP']})">03 POST postcodes to api</button> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import postData from './js/postData.js' 
// import postData from './js/postData.js' 
const postcodes = require('node-postcodes.io')

export default {
  data() {
    return {
      prospectsAndCustomers: [],
      postcodes : [],
      dataFromPostCodes : {}
    }
  },

  methods: {
    getPostcodes : function(prospectsAndCustomers) {
      return this.postcodes = this.prospectsAndCustomers.map(prospectsAndCustomer => prospectsAndCustomer.Postcode)

    },

      
    singleCustomer: function() {
      fetch('http://api.postcodes.io/postcodes/eh68dx')
      .then(response => response.json())
      .then(data => console.log(data));
    },

    // batchPostcode: await postcodes.lookup(['PO123AA', 'PO123AB']),
 
     postData: async function(url = '', data = {}) {
        // Default options are marked with *
        await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(this.dataFromPostCodes = data);
      // .then(console.log(data));
      // return this.dataFromPostCodes = response.json(); // parses JSON response into native JavaScript objects
      // console.log(response.json()); // parses JSON response into native JavaScript objects
    }
  },

  // computed() {
    
  // },

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