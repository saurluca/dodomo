<script lang="ts" setup>
import { ref, inject } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const items = inject('items');

// Define selectedProducts as a reactive property
const selectedRows = ref([]);


</script>

<template>
  <DataTable v-model:selection="selectedRows" :value="items" dataKey="id" selectionMode="multiple" stripedRows removableSort paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem, w-full">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="id" header="ID" sortable style="width: 5%">></Column>
    <Column field="datum" header="Datum" sortable style="width: 15%"></Column>
    <Column field="filiale" header="Filiale" sortable style="width: 20%"></Column>
    <Column field="umsatz" header="Umsatz" sortable style="width: 20%"></Column>
    <Column field="kundenanzahl" header="Kundenanzahl" sortable style="width: 20%"></Column>
    <Column field="prodstunden" header="Prodstunden" sortable style="width: 20%"></Column>
  </DataTable>
</template>


<style scoped>


</style>
