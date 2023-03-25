<script>
export default {
  name: "Title",
};
</script>

<template>
  <h3 class="title">
    <slot />
  </h3>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.title {
  @include title;
  margin: 0 0 $spacing-m;
  color: $content-primary;
}
</style>
