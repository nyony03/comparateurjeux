<template>
  <div>
    <h1>Comparateur</h1>
    <div class="contain">
      <div class="tire">
        <h1>{{ Jeu1.titre }}</h1>
        <h1>{{ Jeu2.titre }}</h1>
      </div>
      <div class="images">
        <img class="image" :src="Jeu1.img" />
        <img class="image" :src="Jeu2.img" />
      </div>
      <div class="tags">
        <p class="tag">#{{ Jeu1.tag }}</p>
        <p class="tag">#{{ Jeu2.tag }}</p>
      </div>
      <div class="descriptions">
        <p>{{ Jeu1.description }}</p>
        <p>{{ Jeu2.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./api";

export default {
  name: "ProductView",
  data() {
    return {
      Jeu1: {},
      Jeu2: {},
    };
  },
  async mounted() {
    this.Jeu1 = await api.getJeu(this.$route.params.idJ1);
    this.Jeu2 = await api.getJeu(this.$route.params.idJ2);
  },
};
</script>

<style scoped>
.contain {
  background-color: #363d5d;
  width: 90vw;
  margin: 5vh 5vw;
  padding: 20px;
  column-rule: 2px solid #0f0f27;
}
.tire,
.images,
.tags,
.descriptions {
  column-count: 2;
  background-color: #424861, #0f0f27;
  color: white;
  /*border: 2px solid #1e212f;*/
  column-rule: 2px solid #0f0f27;
}

h1,
img,
p {
  margin: 10px;
}

.titre {
  margin-top: 20px;
}
</style>