<template lang="html">
  <li> 
    <span>{{ person.firstName }}</span>
    <span>{{ person.postcode }}</span>
    <button>Get long and lat data</button>
    <button>Put on the map</button> 
  </li>
</template>


<script>
export default {
  name: "cap-list-item",
  
  data(){
    return {}
  },
  
  props: ["person"]
}
</script>

<style lang="css" scoped>

</style>