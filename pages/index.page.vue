<template>
  <main class="main">
    <Left />
    <Right />
  </main>
</template>

<script lang="ts" setup>
import { Left, Right } from "components/index";
</script>

<style scoped lang="scss">
@import "styles/mixins";

.main {
  display: flex;
  width: 100%;
  min-height: 100%;

  @include portrait {
    flex-direction: column;
  }
}
</style>
