<template>
  <v-footer class="border-t-md" :height="150" :elevation="24" absolute app color="background">
    <v-container>
      <v-row center no-gutters>
        <v-col>©CoverBike {{ year }}</v-col>
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-spacer />
        <v-col v-for="cat in categ" :key="cat.link">
          <router-link class="text-black text-decoration-none" :to="cat.link">{{ cat.label }}</router-link>
        </v-col>
      </v-row>
      <v-row> Tel: +331234567889 </v-row>
      <v-row class="mt-5"> Email: coverbike@gmail.com </v-row>
      <v-row class="mt-5">
        <v-icon @click="instagram" class="mr-5 cursor-pointer" icon="mdi-instagram"></v-icon>
        <v-icon @click="facebook" class="mr-5 cursor-pointer" icon="mdi-facebook "></v-icon>
        <v-icon @click="twitter" class="cursor-pointer" icon="mdi-twitter"></v-icon>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const categ: any = ref([
  { label: "Contact", link: "contact" },
  { label: "Mention légales", link: "legal" },
  { label: "RGPD", link: "rgpd" },
]);

const year = new Date().getFullYear();
const instagram = () => {
  window.open("https://instagram.com", "_blank");
};
const facebook = () => {
  window.open("https://facebook.com", "_blank");
};
const twitter = () => {
  window.open("https://x.com", "_blank");
};
</script>

<style></style>
