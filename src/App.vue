<template>
  <v-app>
    <v-main class="bg-background">
      <AppBar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from "@/components/core/app/Footer.vue";
import AppBar from "@/components/core/app/AppBar.vue";
</script>
