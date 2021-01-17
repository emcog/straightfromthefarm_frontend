<template>
  <li class="" v-on:click="displayDetails">
    <span>{{ customer.fName }}</span>
    <span>{{ customer.postcode }}</span>
    <span>{{ customer.longlat }}</span>
    <button>Get long and lat data</button>
    <button>Put on the map</button>

  </li>
</template>

<script>
export default {

}
</script>

<style>

</style>