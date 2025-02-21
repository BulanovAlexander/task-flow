import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import { useAlertStore } from "@/stores/alert";
const { notify } = useAlertStore();

export const useTasksStore = defineStore("task", {
  state: () => ({
    tasks: [],
    creatingTask: {
      done: false,
      title: "",
      description: "",
    },
  }),
  actions: {
    addTask() {
      if (this.creatingTask.title.length < 5) return;
      this.tasks.push({
        id: uuidv4(),
        ...this.creatingTask,
      });

      this.creatingTask = {
        title: "",
        description: "",
      };
      this.saveLocal();
      notify({
        type: "success",
        title: "Задача добавлена",
        message: "Задача успешно добавлена",
      });
    },
    deleteTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return;
      this.tasks.splice(taskIndex, 1);
      this.saveLocal();
      notify({
        type: "warning",
        title: "Задача удалена",
        message: "Задача успешно удалена",
      });
    },
    updateTask(taskId, taskData) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return;
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        ...taskData,
      };
      this.saveLocal();
      notify({
        type: "info",
        title: "Задача обновлена",
        message: "Задача успешно обновлена",
      });
    },
    saveLocal() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    getLocal() {
      const items = localStorage.getItem("tasks");
      if (items) {
        this.tasks = JSON.parse(items);
      }
    },
    toggleTaskDone(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return;
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      this.saveLocal();
    },
  },
});
