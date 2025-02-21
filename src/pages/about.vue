<script setup>
const cards = [
  {
    title: "Vue.js",
    src: "https://repository-images.githubusercontent.com/191117003/a3b1f600-8b7e-11e9-8919-695ab3bcc877",
    flex: 12,
  },
  {
    title: "Vuetify",
    src: "https://avatars.mds.yandex.net/i?id=bbf194bb2f7183107dd81f62f3c35c69eac6158f-12731221-images-thumbs&n=13",
    flex: 12,
  },
  {
    title: "Netlify",
    src: "https://avatars.mds.yandex.net/i?id=9c9f1370b5cf3a7ef8472b2d82119eb3af166aa9117db40e-5234613-images-thumbs&n=13",
    flex: 12,
  },
  {
    title: "PWA",
    src: "https://avatars.mds.yandex.net/i?id=a3f008f9141812a3ca8bfa84b8e71ad02886d9cb-10256664-images-thumbs&n=13",
    flex: 12,
  },
];
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
        sm="6"
        lg="3"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom,
          rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="280px"
            cover
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
