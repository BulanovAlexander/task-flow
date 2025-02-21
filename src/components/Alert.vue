<script setup>
import { useAlertStore } from "@/stores/alert";

const { notification } = useAlertStore();
</script>

<template>
  <div class="alert-notification animate__animated animate__bounceInDown">
    <v-alert
      closable
      :text="notification.message"
      :title="notification.title"
      :type="notification.type"
    />
  </div>
</template>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 16px;
  width: 100%;
  max-width: 400px;
}
</style>
