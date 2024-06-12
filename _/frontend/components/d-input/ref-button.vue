<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

</script>

<template>
  <router-link :class="['flex', 'items-center', 'space-x-2', 'hover:bg-gray-800', 'rounded-md', 'p-2']" :to="to">
    <slot></slot>
    <span>{{ name }}</span>
  </router-link>
</template>

<style scoped>

</style>
