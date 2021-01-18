<template lang="html">
  <li> 
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
  data(){
    return {}
  },
  name: "cap-list-item",
  props: ["customersAndProspects"]
}
</script>

<style lang="css" scoped>

</style>