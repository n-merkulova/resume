<template>
  <Card title="Skills">
    <div class="skills">
      <CircularProgress class-name="skill" :percent="90"
        >HTML+CSS</CircularProgress
      >
      <CircularProgress class-name="skill" :percent="80"
        >JavaScript</CircularProgress
      >
      <CircularProgress class-name="skill" :percent="75"
        >React JS</CircularProgress
      >
      <CircularProgress class-name="skill" :percent="50"
        >WebGL</CircularProgress
      >
      <CircularProgress class-name="skill" :percent="50"
        >Node JS</CircularProgress
      >
      <CircularProgress class-name="skill" :percent="75"
        >Figma</CircularProgress
      >
    </div>
  </Card>
</template>

<script>
import { defineComponent } from "vue";

import { Card, CircularProgress } from "components/shared";

export default defineComponent({
  name: "Skills",
  components: {
    Card,
    CircularProgress,
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.skills {
  --rows: 1;
  --columns: 6;

  display: grid;
  grid-template-columns: repeat(var(--columns), auto);
  grid-template-rows: repeat(var(--rows), auto);
  align-items: center;
  justify-content: space-between;
  grid-gap: $spacing-s;

  @include tablet {
    --rows: 2;
    --columns: 3;
  }

  .skill {
  }

  //@media screen and (max-width: 1300px) {

  //}
  //
  //@media screen and (max-width: 1086px) {
  //  --rows: 2;
  //  --columns: 3;
  //}
  //
  //@media screen and (max-width: 900px) {
  //  --rows: 3;
  //  --columns: 2;
  //}
}
</style>
