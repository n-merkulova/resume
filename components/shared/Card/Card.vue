<template>
  <div :class="cn('card', className)">
    <Title v-if="Boolean(title)">{{ title }}</Title>
    <slot />
  </div>
</template>

<script lang="ts">
import cn from "classnames";
import { Title } from "components/shared/Title";
import { defineComponent, PropType } from "vue";

type CardProps = {
  title?: string;
  className?: string;
};

export default defineComponent({
  name: "Card",
  methods: { cn },
  components: {
    Title,
  },
  props: {
    title: {
      type: String as PropType<CardProps["title"]>,
      required: false,
    },
    className: {
      type: String as PropType<CardProps["className"]>,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.card {
  padding: $spacing-m;
  background: $background-secondary;
  border-radius: $radius;
  overflow: hidden;
  height: 100%;
  width: 100%;

  @for $i from 1 through 7 {
    &:nth-child(#{$i}) {
      grid-area: cell-#{$i};
    }
  }

  &_no-padding {
    padding: 0;
  }
}
</style>
