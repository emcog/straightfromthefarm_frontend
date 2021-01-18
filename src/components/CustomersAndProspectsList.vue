<template lang="html">
    <div>
        <h2>Customers and Prospects list</h2>
        <ul> <cap-list-item v-for="(person, index) in customersAndProspects" v-bind:key="index" :person="person"></cap-list-item></ul>
        <!-- <ul><li v-for="person in customersAndProspects" v-bind:key="person" :person="person">banana{{person}}</li></ul> -->
    </div>
</template>

<script>
import CAPListItem from './CAPListItem';

export default {
    name: "customers-and-prospects-list",

    data() { return {} },
    props: ["customersAndProspects"],
    components: { "cap-list-item": CAPListItem }
}
</script>

<style>

</style>