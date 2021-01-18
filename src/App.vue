<template lang="html">
  <div id = "app">
    <customers-and-prospects-list></customers-and-prospects-list>
    <!-- <span>{{customersAndProspects}}</span> -->
    <!-- <br><span> postcodes: {{ postcodes }}</span> -->
  </div>
</template>

<script>

import CustomersAndProspectsList from './components/CustomersAndProspectsList.vue';

export default {
  data() {
    return {
      customersAndProspects: [],
      postcodes : { postcodes : [] },
    }
  },

    methods: {
    
        stripPostcodes : function(prospectsAndCustomers) {
        let postcodesArray = this.customersAndProspects.map(customersAndProspects => customersAndProspects.postcode)
        return this.postcodes.postcodes = postcodesArray;
            }
    },

    mounted() {
        fetch('./ImportedData/customers2020.json')
        .then(res => res.json())
        .then(data => this.customersAndProspects = data )
        .then(this.stripPostcodes)
    },

    name: 'App',
        components: {
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