<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTasksStore } from "@/stores/tasks";

import DialogTaskEdit from "@/components/DialogTaskEdit.vue";
import DialogTaskDelete from "@/components/DialogTaskDelete.vue";

const { deleteTask, updateTask, toggleTaskDone } = useTasksStore();
const { tasks } = storeToRefs(useTasksStore());

const showEditDialog = ref(false);
const showDeleteDialog = ref(false);
const activeTaskId = ref(null);

const handleToggleEditDialog = (taskId) => {
  showEditDialog.value = !showEditDialog.value;
  activeTaskId.value = taskId;
};

const handleToggleDeleteDialog = (taskId) => {
  showDeleteDialog.value = !showDeleteDialog.value;
  activeTaskId.value = taskId;
};

const handleUpdateTask = (taskData) => {
  updateTask(activeTaskId.value, taskData);
  showEditDialog.value = false;
};

const handleDeleteTask = () => {
  deleteTask(activeTaskId.value);
  showDeleteDialog.value = false;
};
</script>

<template>
  <div class="px-4 py-4">
    <template v-if="tasks.length > 0">
      <v-list lines="three" select-strategy="leaf">
        <v-list-item
          v-for="task in tasks"
          :key="task.id"
          :subtitle="task.description"
          :title="task.title"
          :value="task.title"
        >
          <template #prepend="{}">
            <v-list-item-action start>
              <v-checkbox-btn
                :model-value="task.done"
                @change="toggleTaskDone(task.id)"
              />
            </v-list-item-action>
          </template>
          <template #append>
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  color=""
                  icon="mdi-dots-vertical"
                  variant="text"
                />
              </template>
              <v-list>
                <v-list-item
                  class="pe-8"
                  value="Изменить"
                  @click="handleToggleEditDialog(task.id)"
                >
                  <v-list-item-title>Изменить</v-list-item-title>
                  <template #prepend>
                    <v-btn
                      color="grey-lighten-1"
                      size="small"
                      icon="mdi-pencil"
                      variant="text"
                    />
                  </template>
                </v-list-item>
                <v-list-item
                  class="pe-8"
                  value="Удалить"
                  @click="handleToggleDeleteDialog(task.id)"
                >
                  <v-list-item-title class="text-red-darken-4">
                    Удалить
                  </v-list-item-title>
                  <template #prepend>
                    <v-btn
                      color="red-darken-4"
                      size="small"
                      icon="mdi-delete"
                      variant="text"
                    />
                  </template>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
      </v-list>

      <DialogTaskEdit
        v-model="showEditDialog"
        :task-id="activeTaskId"
        @update="handleUpdateTask"
      />
      <DialogTaskDelete v-model="showDeleteDialog" @delete="handleDeleteTask" />
    </template>
    <template v-else>
      <v-card title="Задач пока нет" subtitle="Добавьте первую задачу" />
    </template>
  </div>
</template>
