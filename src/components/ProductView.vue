<template>
  <div class="background">
    <router-link :to="{ name: 'ProductsView' }">
      <button class="buttonRetour">
        <img
            class="ImageButtonRetour"
            src="https://cdn-icons-png.flaticon.com/512/61/61449.png"
        />
      </button>
    </router-link>
    <div
        class="backgroundImage"
        data-panel='{"autoFocus":true,"focusable":true,"clickOnActivate":true}'
        style="display: none"
    >
      <img
          style="width: 100%"
          src="https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1667504225"
      />
    </div>
    <div class="JeuDetail">
      <h1>{{ Jeu.titre }}</h1>
      <div class="balise1">
        <div class="gauche">
          <p>{{ Jeu.description }}</p>
        </div>
        <div class="droite">
          <img class="image" :src="Jeu.img" />
        </div>
      </div>

      <p class="tag">#{{ Jeu.tag }}</p>
    </div>
  </div>
</template>

<script>
import api from "./api";

export default {
  name: "ProductView",
  data() {
    return {
      Jeu: {},
    };
  },
  async mounted() {
    this.Jeu = await api.getJeu(this.$route.params.id);
    console.log(this.$route.params.id);
    console.log(this.Jeu);
  },
};
</script>

<style scoped>
.backgroundImage {
  display: none;
}

.background {
  color: white;
  background-image: url("https://cdn.akamai.steamstatic.com/steam/apps/1057090/page_bg_generated_v6b.jpg?t=1667504225");
  height: 80vh;
}

.buttonRetour {
  height: 50px;
  width: 50px;
  background-color: #2534;
  float: left;
  border-radius: 10% 50% 50% 50%;
  border: #2534 1px solid;
  margin: 2px;
}

.balise1 {
  column-count: 2;
}
.ImageButtonRetour {
  width: 30px;
  height: 30px;
}
</style>

