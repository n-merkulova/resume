<template>
  <div :class="cn('progress', className)">
    <div class="ring">
      <div class="ring__inner" />
      <div class="ring__outer">
        <div />
        <div :style="style" />
      </div>
      <span class="ring__percent">{{ percent }}%</span>
    </div>
    <Text class="text" :without-margin="true">
      <slot />
    </Text>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, shallowReactive } from "vue";

import { Text } from "../Text";
import cn from "classnames";

type CircularProgressProps = { percent: number; className?: string };

export default defineComponent({
  name: "CircularProgress",
  methods: { cn },
  components: {
    Text,
  },
  props: {
    percent: {
      type: Number as PropType<CircularProgressProps["percent"]>,
      required: true,
    },
    className: {
      type: String as PropType<CircularProgressProps["className"]>,
      required: false,
    },
  },
  data() {
    return {
      style: shallowReactive({
        transform: `rotate(${
          45 + (180 * Math.max(this.percent - 50, 0)) / 50
        }deg)`,
      }),
    };
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.progress {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;

  .ring {
    width: 6.8rem;
    height: 6.8rem;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: $spacing-xs;

    &__inner {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1.2rem solid $content-primary;
      opacity: 0.1;
    }

    &__outer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;

      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1.2rem solid $accent-first;
        border-color: $accent-first $accent-first transparent transparent;

        &::before {
          content: "";
          position: absolute;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          background: $accent-first;
        }

        &:nth-child(1) {
          transform: rotate(45deg);

          &::before {
            top: 0;
            left: 0;
            transform: translate(-32%, -31%);
          }
        }

        &:nth-child(2) {
          &::before {
            bottom: 0;
            right: 0;
            transform: translate(32%, 31%);
          }
        }
      }
    }

    &__percent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.8rem;
      color: $content-secondary;
    }
  }

  .text {
  }
}
</style>
