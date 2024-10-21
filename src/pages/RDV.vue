<template>
  <v-container style="width: 100%; height: 100%">
    <v-row justify="center" align="center" dense style="width: 100%; height: 100%">
      <v-col cols="4">
        <h1>Prennez rendez-vous</h1>
      </v-col>
      <v-col cols="6">
        <v-banner v-if="displayed" bg-color="#4CAF50" lines="one">
          <v-banner-text><b>Rendez-vous réservé, merci de l'honorer</b></v-banner-text>
        </v-banner>
        <v-card class="pt-5" color="white" border="xl">
          <v-form v-model="isValid">
            <v-text-field v-model="email" label="Email" :rules="[rules.required, rules.email]"> </v-text-field>
            <v-text-field v-model="tel" label="Tél" :rules="[rules.required, rules.phoneNumber]"></v-text-field>
            <v-select
              v-model="motif"
              label="Motif du RDV"
              :items="['Devis', 'Réparation peinture', 'Peinture complète', 'Cover complète']"
            ></v-select>
            <v-text-field
              @click:control="showDatePicker = !showDatePicker"
              v-model="date"
              label="Date"
              :rules="[rules.required]"
            ></v-text-field>
            <v-date-picker
              v-if="showDatePicker"
              @update:modelValue="transformDate"
              show-adjacent-months
              color="blue"
              :first-day-of-week="1"
              :min="new Date().toISOString().split('T')[0]"
              :max="new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]"
            ></v-date-picker>
            <v-textarea v-model="message" label="Information optionnel"></v-textarea>
          </v-form>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="showBanner" variant="flat" color="blue" :disabled="!isValid">Envoyer</v-btn>
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
  phoneNumber: (value: any) => {
    const pattern = /^(\+33|0)[1-9](\s?\d{2}){4}$/;
    return pattern.test(value) || "Doit être un numéro de téléphone";
  },
});
const email = ref("");
const tel = ref("");
const date: any = ref("");
const motif = ref("");
const message = ref("");
const showDatePicker = ref(false);
const transformDate = (val: any) => {
  const transformedDate = new Date(val).toISOString().split("T")[0];
  date.value = transformedDate;
  showDatePicker.value = !showDatePicker;
};
const displayed = ref(false);
const showBanner = () => {
  displayed.value = !displayed.value;
  reset();
  setTimeout(() => {
    displayed.value = false;
  }, 3000);
};
const reset = () => {
  email.value = "";
  tel.value = "";
  date.value = "";
  motif.value = "";
  message.value = "";
};
</script>
