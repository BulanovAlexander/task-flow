<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTasksStore } from "@/stores/tasks";
import ListTask from "@/components/ListTask.vue";

const { getLocal, addTask } = useTasksStore();
const { creatingTask } = storeToRefs(useTasksStore());

const rules = [
  (value) => {
    if (!value || value.length > 4) {
      return true;
    }
    return "Минимальная длина 5 символов";
  },
];

onMounted(() => {
  getLocal();
});
</script>

<template>
  <v-text-field
    v-model="creatingTask.title"
    label="Добавить задачу"
    :rules="rules"
    @keyup.enter="addTask"
  />
  <ListTask />
</template>
