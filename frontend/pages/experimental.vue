<script lang="ts" setup>
const {data, error} = await useFetch("http://localhost:8000/test/")
const fetchedData = ref(data);
import DContentExperimental from '@/components/d-content/experimental.vue';

</script>

<template>
<DContentExperimental/>
</template>

<style scoped>

</style>

<!--    <div class="p-40">-->
<!--      <h1 class="text-5xl font-bold">-->
<!--        Testing, and ...-->
<!--      {{ fetchedData }}-->
<!--      {{ error }}-->
<!--      </h1>-->
<!--    </div>-->
<!--  <d-content-todolist/>-->
