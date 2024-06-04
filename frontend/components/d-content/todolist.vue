<script lang="ts" setup>
import Checkbox from 'primevue/checkbox';
import {ref} from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const {data: tasks, refresh} = await useFetch("http://127.0.0.1:8000/api/TodoTask/all/");

async function addTask() {
  await $fetch("http://127.0.0.1:8000/api/TodoTask/add/", {
    method: "POST",
    body: JSON.stringify({titel: newTask.value}),
  });
  await refresh();
}

async function deleteTask(id: number) {
  await $fetch(`http://127.0.0.1:8000/api/TodoTask/${id}/delete/`, {method: "DELETE"});
  await refresh();
}

async function deleteSelectedTasks() {
  for (let task of checkTask.value) {
    await deleteTask(task.id);
  }
  await refresh();
}

const newTask = ref("");
const checkTask = ref([]);
</script>

<template>
  <div class="flex-1 flex-col p-4 bg-background">
    <header class="flex justify-between items-center p-2">
      <h1 class="font-bold text-2xl">Todo list</h1>
    </header>

    <form @submit.prevent="addTask">
      <!--      <input v-model="newTask" placeholder="Add a new item" type="text"/>-->
      <!--      <button type="submit">Add</button>-->
      <div class="flex-auto">
        <p-input-text id="ssn" v-model="newTask" placeholder="Add a new item"/>
        <p-button type="submit">Add</p-button>
      </div>
    </form>
    <div class="p-8">
      <DataTable v-model:selection="checkTask" :value="tasks" dataKey="id" tableStyle="min-width: 50rem">
        <Column v-model:selection="checkTask" headerStyle="width: 3rem" selectionMode="multiple"></Column>
        <Column field="id" header="ID"></Column>
        <Column field="titel" header="Titel"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="assignee" header="Assignee"></Column>
      </DataTable>
      <div>
        <p-button class="mt-4" @click="deleteSelectedTasks">Check of Selected Tasks</p-button>
      </div>
    </div>
  </div>
</template>


<!--     <li v-for="task in tasks" :key="task.titel">-->
<!--        &lt;!&ndash;        <d-input-checkbox/>&ndash;&gt;-->
<!--        <Checkbox v-model="checked" :binary="true"/>-->
<!--        {{ task.titel }}-->
<!--        <button @click="removeTask(task.id)">Remove</button>-->
<!--      </li>-->
