<script lang="ts" setup>
const {data: items, refresh} = await useFetch("http://127.0.0.1:8000/api/PerformanceMusswessels/all/", {
  params: {
    limit: 50
  }
});

provide('items', items);
</script>

<template>
  <div class="flex p-8 w-full">
    <div class="w-full1">
      <header class="text-4xl font-bold text-center p-6 ">
        Performance Musswessels
      </header>
      <d-tables-sample-table :items="items" class=""/>
    </div>
  </div>
</template>

<style scoped>

</style>
