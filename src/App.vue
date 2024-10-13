<template>
  <v-app>
    <v-main class="bg-background">
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from "@/components/core/app/Footer.vue";
</script>
