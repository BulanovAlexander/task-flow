<script setup>
import { ref } from "vue";

const drawer = ref(null);

const items = [
  { text: "Главная", icon: "mdi-home", to: "/" },
  { text: "О Приложении", icon: "mdi-information", to: "/about/" },
];
</script>

<template>
  <v-responsive class="border rounded">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-img
          src="https://picsum.photos/1920/1080?random"
          height="64"
          cover
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          alt="Task Flow"
        >
          <v-list>
            <v-list-item
              subtitle="Управляй делами"
              title="Task Flow"
              role="option"
            />
          </v-list>
        </v-img>

        <v-divider />

        <v-list :lines="false" density="compact" nav>
          <router-link
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            role="option"
          >
            <v-list-item :value="item">
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>

              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon
          aria-label="Переключатель меню"
          @click="drawer = !drawer"
        />
        <v-app-bar-title>Список задач</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
