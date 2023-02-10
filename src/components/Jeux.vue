<template>
  <div class="Jeux">
    <h1>Jeux du moments</h1>

    <Card
        v-for="item in list"
        :key="item.titre"
        :titre="item.titre"
        :tag="item.tag"
        :description="item.description"
        :img="item.img"
    >
    </Card>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Jeux",
  props: {
    list: Array,
  },
  components: { Card },
};
</script>

<style scoped>
h1 {
  color: white;
  margin-bottom: 30px;
}
</style>