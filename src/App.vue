<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="getPostcodes">01 Return postcodes</button>
    <button v-on:click="singleCustomer">02 GET postcodes api</button>
    <!-- <button v-on:click="postData('http://api.postcodes.io/postcodes', '{{postcodes}}')">03 POST postcodes to api</button> -->
    <!-- <button v-on:click="postLog('http://api.postcodes.io/postcodes', '{{postcodes}}')">04 POST postcodes to api</button> -->
    <!-- <button v-on:click="console.log(postcodes)">log it</button> -->
    <button v-on:click="logIt">log it</button>
    <span>{ postcodes:{{ postcodes }}}</span>
    <!-- <button v-on:click="batchPostcode('http://api.postcodes.io/postcodes', {'postcodes' : ['OX49 5NU', 'M32 0JG', 'NE30 1DP']})">03 POST postcodes to api</button> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      prospectsAndCustomers: [],
      postcodes : {postcodes : []}, //change this to an object postcodes: postcodes {}
      // postcodes : [], //change this to an object postcodes: postcodes {}
      dataFromPostCodes : {}
    }
  },

  methods: {
    
    getPostcodes : function(prospectsAndCustomers) {
      let postcodesArray = this.prospectsAndCustomers.map(prospectsAndCustomer => prospectsAndCustomer.postcode)
      return this.postcodes.postcodes = postcodesArray;
      // how to add an array to an  object key
      // return this.postcodes = this.prospectsAndCustomers.map(prospectsAndCustomer => prospectsAndCustomer.postcode)
    },

    logIt: function() {
      // const postCodeString = this.postcodes.map(postcode => `${postcode}`);
    // add "" to every array entry using map" 
      // console.log( `"{ postcodes : " + ${postCodeString}` );
      console.log(JSON.stringify(this.postcodes));
    },

      
    singleCustomer: function() {
      fetch('http://api.postcodes.io/postcodes/eh68dx')
      .then(response => response.json())
      .then(data => console.log(data));
    },

    postLog : function(url = '', data = {}) {
        console.log(JSON.stringify(data))
    },


 
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
    }
  },

  mounted() {
    fetch('./ImportedData/customers2020.json')
    .then(res => res.json())
    .then(prospectsAndCustomers => this.prospectsAndCustomers = prospectsAndCustomers )
    .then(this.getPostcodes)
    .then(console.log(this.postcodes))
    // .then(this.postData("http://api.postcodes.io/postcodes", "postcodes:" this.postcodes ))
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