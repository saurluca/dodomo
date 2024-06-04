<script lang="ts" setup>
import {ref} from "vue";
import DComponentTask from "~/components/d-content/task.vue";

const checked = ref(false);
const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
const addTask = () => tasks.value.push(`Task ${tasks.value.length + 1}`);
</script>

<template>
  <div >
    <header class="flex p-5 justify-center" :class="{ bounce: checked }">
      <h1 class="font-bold text-2xl">Experimental</h1>
    </header>
    <div class="flex-1 p-10">
      <d-content-task v-for="(task, index) in tasks" :key="index" class="mt-2" :class="{ bounce: checked }"/>
      <button @click="addTask" class="mt-2">Add Task</button>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 1s;
}
</style>
