<template>
  <p :class="cn('text', withoutMargin && 'text_without-margin', className)">
    <span v-if="Boolean(icon)" class="text__icon">
      <Icon :type="icon" />
    </span>
    <span>
      <slot />
    </span>
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Icon, IconType } from "../Icon";
import cn from "classnames";

type TextProps = {
  withoutMargin?: boolean;
  icon?: IconType;
  className?: string;
};

export default defineComponent({
  name: "Text",
  methods: { cn },
  components: { Icon },
  props: {
    withoutMargin: {
      type: Boolean as PropType<TextProps["withoutMargin"]>,
      required: false,
    },
    icon: {
      type: String as PropType<TextProps["icon"]>,
      required: false,
    },
    className: {
      type: String as PropType<TextProps["className"]>,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.text {
  @include text;
  color: $content-secondary;
  display: inline-flex;
  align-items: center;
  margin: 0 0 $spacing-s;

  &:last-child {
    margin-bottom: 0;
  }

  &_without-margin {
    margin-bottom: 0;
  }

  &__icon {
    display: inline-flex;
    margin-right: $spacing-xs;
  }
}
</style>
