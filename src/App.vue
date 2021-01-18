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
    },

    name: 'App',
        components: {
            "customers-and-prospects-list" : CustomersAndProspectsList
    }
}