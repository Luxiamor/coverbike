<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col>
        <v-img :height="800" cover src="../../public/covering 1.jpeg">
          <template #default>
            <v-card
              :location="'center'"
              :variant="'text'"
              :width="400"
              :height="300"
              :border="false"
              style="background: transparent; text-align: center"
            >
              <v-card-title class="text-h2 text-white font-weight-bold">Coverbike</v-card-title>
              <v-card-text class="text-white text-h5 font-weight-medium">Des covers de qualité dès 100€</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn size="x-large" :color="'#333333'" :variant="'elevated'" class="text-white"
                  >Découvrez les offres</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="pa-0" fluid :height="600">
    <v-row style="height: 600px">
      <v-col style="height: 600px">
        <v-window v-model="window" continuous style="height: 600px" show-arrows>
          <v-window-item :key="1" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img
                      alt="Bernadette"
                      src="https://cdn.pixabay.com/photo/2023/08/07/15/18/woman-8175307_640.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating1" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Bernadette</p>
                  <p>
                    J'ai récemment fait recouvrir ma moto et je suis ravi du résultat ! Je recommande vivement ce site
                    pour tous vos besoins de covering !
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
          <v-window-item :key="2" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img
                      alt="Gérard"
                      src="https://cdn.pixabay.com/photo/2023/05/06/12/17/music-7974197_1280.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating2" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Gérard</p>
                  <p>Incroyable covering, merci pour tout !</p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
          <v-window-item :key="3" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img
                      alt="Jess"
                      src="https://media.istockphoto.com/id/1452687636/fr/photo/jeune-femme-se-lie-avec-son-chat-dans-un-appartement.jpg?s=2048x2048&w=is&k=20&c=3LED2SeBqObd4VgvS7y8LQ0z8iCZM9PqOXYYjhf_nZA="
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating3" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Jess</p>
                  <p>
                    Je suis très satisfait du travail réalisé sur mon 2 roues, le covering est magnifique et durable.
                    Merci beaucoup !
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
          <v-window-item :key="4" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img alt="Alex" src="https://cdn.pixabay.com/photo/2023/04/10/19/42/sea-7914544_640.jpg"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating4" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Alex</p>
                  <p>Je suis impressionné par le niveau de détail et de professionnalisme de cette entreprise</p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
          <v-window-item :key="5" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img alt="Léa" src="https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_640.png"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating5" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Léa</p>
                  <p>"Excellent service et produit de haute qualité ! J'adore le nouveau look de ma moto</p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
          <v-window-item :key="6" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img
                      alt="Sparky"
                      src="https://cdn.pixabay.com/photo/2024/02/17/09/39/cat-8579018_1280.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating6" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Sparky</p>
                  <p>Miaou !</p>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="pa-0 bg-black" fluid>
    <v-row>
      <v-col>
        <v-carousel :height="600" cycle hide-delimiters show-arrows="hover" :interval="10000">
          <v-carousel-item src="../../public/covering 2.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 3.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 4.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 6.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 7.jpeg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 8.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 5.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 9.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 10.png" :aspect-ratio="16 / 9"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const window = ref(0);
const rating1 = ref(5);
const rating2 = ref(4);
const rating3 = ref(4);
const rating4 = ref(5);
const rating5 = ref(5);
const rating6 = ref(5);
onMounted(() => {
  setInterval(() => {
    if (window.value < 5) window.value += 1;
    else window.value = 0;
  }, 8000);
});
</script>
