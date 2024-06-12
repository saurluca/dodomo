<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col h-full">
    <d-header/>
    <div class="flex flex-1 bg-background">
      <d-sidebar/>
        <slot></slot>
    </div>
  </div>

</template>

<style scoped>

</style>
