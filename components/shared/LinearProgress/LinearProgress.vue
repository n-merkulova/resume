<template>
  <div class="progress">
    <Text>
      <slot />
    </Text>
    <div class="line">
      <div class="line__back" />
      <div class="line__front" :style="style" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, shallowReactive} from "vue";
import { Text } from "../Text";

type LinearProgressProps = { percent: number };

export default defineComponent({
  name: "LinearProgress",
  props: {
    percent: {
      type: Number as PropType<LinearProgressProps['percent']>,
      required: true,
    }
  },
  components: { Text },
  data() {
    return {
      style: shallowReactive({
        width: `${this.percent}%`,
      }),
    };
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.progress {
  margin-bottom: $spacing-s;

  &:last-of-type {
    margin-bottom: 0;
  }

  .line {
    margin-bottom: $spacing-xs;
    height: 1.2rem;
    position: relative;

    &__back,
    &__front {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2.4rem;
    }

    &__back {
      background: $content-primary;
      opacity: 0.1;
    }

    &__front {
      background: $accent-second;
    }
  }
}
</style>
