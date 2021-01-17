<template lang="html">
  <div id = "app">
    <map-locations/>
    <customers-and-prospects-list></customers-and-prospects-list>
    <button v-on:click="handlePostcode">About postcode</button>
    <button v-on:click="postPostCodeAPI">postPostCodeAPI</button>
    <button v-on:click="appendLongLatToCAP('KY11 3AE')">Append</button>
    <span>{{customersAndProspects}}</span>
    <br><span> postcodes: {{ postcodes }}</span>
    <span>about eh6 8nx {{aboutPostcode.result.longitude }}, {{aboutPostcode.result.latitude }} {{aboutPostcode.result.postcode}}</span>
  </div>
</template>

<script>
import CustomersAndProspectsList from './components/CustomersAndProspectsList.vue';
import MapLocations from './components/MapLocations.vue';

export default {
  data() {
    return {
      customersAndProspects: [],
      postcodes : { postcodes : [] },
      aboutPostcode: {},
      aboutPostCodes : {}
    }
  },

  methods: {
    
    stripPostcodes : function(prospectsAndCustomers) {
      let postcodesArray = this.customersAndProspects.map(customersAndProspects => customersAndProspects.postcode)
      return this.postcodes.postcodes = postcodesArray;
    },


    // handlePostcode: function() {
    //   fetch('http://api.postcodes.io/postcodes/eh68dx')
    //   .then(response => response.json())
    //   .then(data => this.aboutPostcode = data)
    //   // .then(data => console.log(data));
    // },


    // 
    // loop over each entry in array
    // if aboutPostcode.result.postcode === postcode
    // then customersAndProspects[i].longitude = aboutPostcode.result.latitude && customersAndProspects[i].latitude
    appendLongLatToCAP : function(postcode) {
      this.customersAndProspects.forEach(person => {
          if (person.postcode == postcode) {
            person.longitude = this.aboutPostcode.longitude;
            person.latitude = this.aboutPostcode.latitude;
          }
      });
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

  computed: {
     handlePostcode: function() {
      fetch('http://api.postcodes.io/postcodes/eh68dx')
      .then(response => response.json())
      .then(data => this.aboutPostcode = data)
    }

  },

  mounted() {
    fetch('./ImportedData/customers2020.json')
    .then(res => res.json())
    .then(customersAndProspects => this.customersAndProspects = customersAndProspects )
    .then(this.stripPostcodes)
    // .then(this.postData("http://api.postcodes.io/postcodes", this.postcodes ))
  },

name: 'App',
  components: {
    "map-locations" : MapLocations,
    "customers-and-prospects-list" : CustomersAndProspectsList
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