<script setup lang="ts">

const route = useRoute()
</script>

<template>
  <div>
    <h1>posts</h1>
    <p>{{route.params.id}}</p>
  </div>
</template>

<style scoped>

</style>