<script setup>
import { storeToRefs } from "pinia";
import View from "./view.vue";
import Alert from "@/components/Alert.vue";
import { useAlertStore } from "@/stores/alert";

const { showAlert } = storeToRefs(useAlertStore());
</script>

<template>
  <v-app>
    <Alert v-if="showAlert" />
    <View />
  </v-app>
</template>
