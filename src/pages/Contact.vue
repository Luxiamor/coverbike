<template>
  <v-container style="width: 100%; height: 100%">
    <v-row justify="center" align="center" dense style="width: 100%; height: 100%">
      <v-col cols="4">
        <h1>Une question ?</h1>
        <h3>Écrivez-nous et nous répondrons dans les plus brefs délais</h3>
      </v-col>
      <v-col cols="6">
        <v-card class="pt-5" color="white" border="xl">
          <v-form v-model="isValid">
            <v-text-field v-model="email" label="Email" :rules="[rules.required, rules.email]"> </v-text-field>
            <v-text-field v-model="subject" label="Sujet" :rules="[rules.required]"> </v-text-field>
            <v-textarea v-model="message" label="Message"></v-textarea>
          </v-form>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="sendMail" variant="flat" color="blue" :disabled="!isValid">Envoyer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isValid = ref(false);
const rules = ref({
  required: (value: any) => !!value || "Requis.",
  email: (value: any) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(value) || "Doit être un email";
  },
});
const email = ref("");
const subject = ref("");
const message = ref("");
const sendMail = () => {
  resetValues();
};
const resetValues = () => {
  email.value = "";
  subject.value = "";
  message.value = "";
};
</script>
