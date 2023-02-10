

<template>
  <div class="Card">
    <div class="gauche">
      <h1>{{ titre }}</h1>
      <p class="tag">#{{ tag }}</p>
      <p>{{ description }}</p>
    </div>
    <div class="droite">
      <img class="image" :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    titre: String,
    tag: String,
    description: String,
    img: String,
  },
};
</script>

<style scoped>
.Card {
  column-count: 2;
  color: white;
  background-color: #363d5d;
  padding: 10px;
  margin: 15px 20px;
}
.Card:hover {
  background-color: #5d658e;
}
.image:hover {
  background-image: url("https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392");
  z-index: 1;
}
h1 {
  text-decoration: underline;
}
.tag {
  font-style: italic;
}
</style>