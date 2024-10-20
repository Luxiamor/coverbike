<template>
  <v-app-bar scroll-behavior="hide">
    <template v-slot:prepend>
      <router-link class="text-black text-decoration-none" :to="'/'">
        <v-img src="../../../../public/logo.webp" height="60" width="60" />
      </router-link>
    </template>
    <v-btn variant="elevated" color="blue" @click="() => router.push('/rdv')">Prendre RDV</v-btn>
    <v-btn variant="text" @click="() => router.push('/404')">Nos Covers</v-btn>
    <v-btn variant="text" @click="() => router.push('/contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
</script>
