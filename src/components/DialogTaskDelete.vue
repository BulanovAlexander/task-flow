<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emits = defineEmits(["update:modelValue", "delete"]);

const dialog = computed({
  get: () => props.modelValue,
  set: (newValue) => emits("update:modelValue", newValue),
});
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="420" persistent>
      <v-card
        class="text-center"
        title="Удалить задачу?"
        text="Вы не сможете отменить это действие."
      >
        <template #actions>
          <v-spacer />
          <v-btn @click="dialog = false"> Отмена </v-btn>
          <v-btn color="error" @click="emits('delete')"> Удалить </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
