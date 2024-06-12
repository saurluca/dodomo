<script lang="ts" setup>

</script>

<template>
  <button
      :aria-checked="isChecked"
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-highlight data-[state=checked]:text-primary-foreground"
      :data-state="isChecked ? 'checked' : 'unchecked'"
      role="checkbox"
      type="button"
      value="on"
      @click="isChecked = !isChecked"
      <Checkbox v-model="checked" :binary="true" />
  ></button>
</template>

<style scoped>

</style>
