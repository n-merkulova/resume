<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Text } from "components/shared";

type TechnologyProps = { icon: string };

export default defineComponent({
  components: { Text },
  name: "Logo",
  props: {
    icon: String as PropType<TechnologyProps["icon"]>,
  },
});
</script>

<template>
  <div class="logo">
    <div class="logo__icon" :style="`background-image: url(${icon})`" />
    <Text :without-margin="true">
      <slot />
    </Text>
  </div>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.logo {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__icon {
    width: 4.8rem;
    height: 4.8rem;
    margin-bottom: $spacing-xs;
    background: no-repeat center / contain;
  }
}
</style>
