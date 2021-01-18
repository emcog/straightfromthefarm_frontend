<template lang="html">
  <li> 
    banana list item
    {{ person }}
    <!-- <span>{{ customer.fName }}</span>
    <span>{{ customer.postcode }}</span>
    <span>{{ customer.longlat }}</span>
    <button>Get long and lat data</button>
    <button>Put on the map</button> -->
  </li>
</template>


<script>
export default {
  name: "cap-list-item",
  
  data(){
    return {}
  },
  
  props: ["customersAndProspects"]
}
</script>

<style lang="css" scoped>

</style>