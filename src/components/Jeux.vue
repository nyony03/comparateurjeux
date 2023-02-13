<template>
  <div class="Jeux">
    <h1>Jeux du moments</h1>

    <!--
    <router-link
      v-for="item in list"
      :to="{ name: 'ProductView', params: { id: item.id } }"
      :key="item.id"
    >
        </router-link>

    -->
    <Card
        class="JeuList-item"
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :titre="item.titre"
        :tag="item.tag"
        :description="item.description"
        :img="item.img"
    >
    </Card>

    <button class="buttonCompare">
      <span>Noms cochés : {{ checkedProducts }}</span>
    </button>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Jeux",
  props: {
    list: Array,
    checkedProducts: Array,
  },
  components: { Card },
};
</script>

<style scoped>
h1 {
  color: white;
  margin-bottom: 30px;
}
.buttonCompare {
  position: fixe;
}
</style>