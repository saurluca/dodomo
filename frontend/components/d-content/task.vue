<script>
import TrashSvg from "assets/icons/trash-svg.vue";
import {ref} from "vue";

export default {
  name: 'd-component-task',
  components: {TrashSvg},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup() {
    const checked = ref(false);
    return { checked };
  }
}

</script>


<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card" :class="{ bounce: checked }">
    <div class="p-3 flex items-center justify-between" >
      <div class="flex items-center space-x-4">
        <p-checkbox v-model="task.completed" :binary="true"/>
        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-lg font-medium" for="task-2">
          {{ task.titel }}
        </label>
      </div>
      <div class="flex items-center ml-16 space-x-4">
        <div class="text-sm text-gray-500">
          {{ task.due_date }}
        </div>
        <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 bg-sidebar text-destructivetext hover:bg-destructive/80 h-10 w-10"
            @click="$emit('delete-task')"
        >
          <TrashSvg/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 1s;
}
</style>
