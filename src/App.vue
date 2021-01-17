<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <button v-on:click="aboutPostcode">About postcode</button>

    <button v-on:click="postPostCodeAPI">postPostCodeAPI</button>

    <br><span>{ postcodes:{{ postcodes }}}</span>

  </div>
</template>

<script>

export default {
  data() {
    return {
      prospectsAndCustomers: [],
      postcodes : { postcodes : [] },
      aboutPostCodes : {}
    }
  },

  methods: {
    
    stripPostcodes : function(prospectsAndCustomers) {
      let postcodesArray = this.prospectsAndCustomers.map(prospectsAndCustomer => prospectsAndCustomer.postcode)
      return this.postcodes.postcodes = postcodesArray;
    },

      // get this working
      // take an index on click
      // return the lat & long
      // put on a map
    aboutPostcode: function() {
      fetch('http://api.postcodes.io/postcodes/eh68dx')
      .then(response => response.json())
      .then(data => console.log(data));
    },


    postLog : function(url = '', data = {}) {
        console.log(url)
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
      }).then(this.aboutPostCodes = data);
      
    },

    postPostCodeAPI : function() {
      const endPoint = 'http://api.postcodes.io/postcodes';
      const data = this.postcodes;

      console.log(this.postData(endPoint, data));
    }
  },

  mounted() {
    fetch('./ImportedData/customers2020.json')
    .then(res => res.json())
    .then(prospectsAndCustomers => this.prospectsAndCustomers = prospectsAndCustomers )
    .then(this.stripPostcodes)
    .then(this.postData("http://api.postcodes.io/postcodes", this.postcodes ))
  },

name: 'App',
  components: {
    // CustomersAndProspects
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