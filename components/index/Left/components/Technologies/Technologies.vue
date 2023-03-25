<template>
  <Card title="Technologies I work with">
    <div class="technologies">
      <Technology v-for="{ name, icon } in technologies" :icon="icon">
        {{ name }}
      </Technology>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Card } from "components/shared";

import { TECHNOLOGIES } from "./config";
import { Technology } from "./Technology";

export default defineComponent({
  name: "Technologies",
  components: {
    Technology,
    Card,
  },
  data() {
    return { technologies: TECHNOLOGIES };
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.technologies {
  --rows: 1;
  --columns: 7;

  display: grid;
  grid-template-rows: repeat(var(--rows), 1fr);
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: $spacing-xs;

  @include tablet {
    --rows: 2;
    --columns: 4;
  }
}
</style>
