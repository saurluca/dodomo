<script lang="ts" setup>
import {ref} from "vue";

// const baseURL= "http://127.0.0.1:8000"
const baseURL = process.env.API_BASE_URL

// const {data: tasks, refresh} = await useFetch("http://127.0.0.1:8000/api/TodoTask/all/?limit=10");
const {data: tasks, refresh} = await useFetch(`${baseURL}/api/TodoTask/all/?limit=10`);
const newTask = ref("");
const new_due_date = ref("");
const checked = ref([]);

async function addTask() {
  await $fetch("http://127.0.0.1:8000/api/TodoTask/add/", {
    method: "POST",
    body: JSON.stringify({titel: newTask.value}),
    // body: JSON.stringify({titel: newTask.value, due_date: new_due_date.value}),
  });
  await refresh();
}

async function deleteTask(id: number) {
  await $fetch(`http://127.0.0.1:8000/api/TodoTask/${id}/delete/`, {method: "DELETE"});
  await refresh();
}

</script>

<template>
  <div class="">
    <header :class="{ bounce: checked }" class="flex p-5 justify-center">
      <h1 class="font-bold text-2xl">Experimental</h1>
    </header>

    <p-input-text v-model="newTask" class="mt-2 ml-4" @keydown.enter="addTask"/>
    <p-button class="mt-2 bg-highlight " @click="addTask">
      Add Task
    </p-button>
    <div>
<!--      <p-calendar v-model="new_due_date" class="p-4" dateFormat="dd/mm/yy"/>-->
    </div>
    <div class="flex-1 p-4">
      <d-content-task v-for="(task, index) in tasks"
                      :key="index"
                      :class="{ bounce: checked, completed: task.completed }"
                      :task="task"
                      class="mt-2"
                      @delete-task="deleteTask(task.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}

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
