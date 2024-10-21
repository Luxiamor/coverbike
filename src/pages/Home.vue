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
      <v-col cols="6" style="height: 600px">
        <v-img src="../../public/map.png">
          <template v-slot:default>
            <div class="d-flex align-center justify-center fill-height">
              <v-btn @click="maps"> Venir nous voir </v-btn>
            </div>
          </template>
        </v-img>
      </v-col>
      <v-col cols="6" style="height: 600px">
        <v-window v-model="window1" continuous style="height: 600px" show-arrows>
          <v-window-item :key="1" style="height: 600px">
            <v-card :location="'center'" :height="500" :width="600" color="grey-darken-1">
              <v-row style="height: 100%">
                <v-col cols="6" align-self="center">
                  <v-avatar :size="200" class="ml-10">
                    <v-img
                      alt="Bernard"
                      src="https://cdn.pixabay.com/photo/2023/02/13/20/49/old-man-7788342_1280.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating1" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Bernard</p>
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
                      src="https://cdn.pixabay.com/photo/2023/07/20/04/45/leva-8138344_1280.jpg"
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
                      alt="Huguette"
                      src="https://cdn.pixabay.com/photo/2015/09/01/20/51/old-woman-917608_1280.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating3" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Huguette</p>
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
                    <v-img
                      alt="Huges"
                      src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="6" align-self="center">
                  <v-rating v-model="rating5" readonly active-color="orange-lighten-1"></v-rating>
                  <p class="text-h4">Huges</p>
                  <p>"Excellent service et produit de haute qualité ! J'adore le nouveau look de ma moto</p>
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
          <v-carousel-item src="../../public/covering 3.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 4.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 6.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 7.jpeg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 5.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 10.png" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 11.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 12.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 13.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 14.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 16.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 17.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
          <v-carousel-item src="../../public/covering 18.jpg" :aspect-ratio="16 / 9"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const window1 = ref(0);
const rating1 = ref(5);
const rating2 = ref(4);
const rating3 = ref(4);
const rating4 = ref(5);
const rating5 = ref(5);
const rating6 = ref(5);
onMounted(() => {
  setInterval(() => {
    if (window1.value < 4) window1.value += 1;
    else window1.value = 0;
  }, 8000);
});

const maps = () => {
  window.open("https://maps.app.goo.gl/KE6mCQERRCcfLJH28", "_blank");
};
</script>
