<template>
  <slot />
  <!-- TODO: loader -->
  <!--  <div class="loader" v-if="!resize()?.currentHtmlFontSize">Loading</div>-->
</template>

<script>
import { resize } from "utils/Resize";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    resize() {
      return resize;
    },
  },
});
</script>

<style lang="scss">
@import "styles/mixins.scss";

html,
body,
#app {
  margin: 0;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: $background-primary;
  color: $content-primary;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: underline;
  color: inherit;
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $background-primary;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped></style>
