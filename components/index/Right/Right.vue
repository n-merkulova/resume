<script>
import { About, Education, Experience } from "./components";

export default {
  name: "Right",
  components: {
    About,
    Education,
    Experience,
  },
};
</script>

<template>
  <section class="right">
    <About />
    <Education />
    <Experience />
  </section>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.right {
  padding: #{$spacing-xl + $spacing-m} $spacing-xl $spacing-xl;

  @include portrait {
    padding: $spacing-xl;
  }

  @include mobile {
    padding: $spacing-l #{$spacing-s + $spacing-m};
  }
}
</style>
