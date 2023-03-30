<template>
   <div>
      <h1>Produc route id: {{ id }} </h1>
   </div>
</template>

<script setup>
//  id must be match acording to the file name like: [id].vue
const {id} = useRoute().params  
</script>

<style scoped>


</style>