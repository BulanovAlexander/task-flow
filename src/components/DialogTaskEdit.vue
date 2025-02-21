<script setup>
import { ref, computed } from "vue";
import { useTasksStore } from "@/stores/tasks";
import { watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  taskId: {
    type: String,
    default: () => "",
  },
});

const emits = defineEmits(["update:modelValue", "update"]);

const dialog = computed({
  get: () => props.modelValue,
  set: (newValue) => emits("update:modelValue", newValue),
});

const title = ref("");
const description = ref("");

const { tasks } = useTasksStore();

watch(
  () => props.taskId,
  (value) => {
    if (value) {
      const task = tasks.find((task) => task.id === props.taskId);
      title.value = task.title;
      description.value = task.description;
    }
  }
);
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="400" persistent>
      <v-card class="text-center" title="Редактировать">
        <v-card-text>
          <v-text-field v-model="title" label="Заголовок" />
          <v-text-field v-model="description" label="Описание" />
        </v-card-text>
        <template #actions>
          <v-spacer />
          <v-btn @click="dialog = false"> Отмена </v-btn>
          <v-btn
            color="success"
            @click="emits('update', { title, description })"
          >
            Сохранить
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
