<script lang="ts" setup>

import BoxSvg from "assets/icons/box-svg.vue";
</script>

<template>
  <header class="bg-header text-white p-1 flex items-center justify-between lg:px-6 h-14">
    <div class="flex items-center">
      <d-input-ref-button :to="'/dashboard'" class="text-2xl font-bold" name="Databites">
        <box-svg/>
      </d-input-ref-button>
    </div>
    <div class="text-sm text-gray-400">04.08.2023</div>
  </header>
</template>

<style scoped>

</style>