<template>
  <div class="job">
    <div class="job-icon">
      <Icon type="calendar" />
    </div>
    <div class="job-content">
      <Text className="job-content__date">{{ date }}</Text>
      <span class="job-content__title">{{ title }}</span>
      <ul class="job-content__info">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Icon, Text } from "components/shared";

type JobProps = {
  date: string;
  title: string;
};

export default defineComponent({
  name: "Job",
  components: { Text, Icon },
  props: {
    date: {
      type: String as PropType<JobProps["date"]>,
      required: true,
    },
    title: {
      type: String as PropType<JobProps["title"]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.job {
  display: flex;

  &-icon {
    color: $accent-second;
    margin-right: $spacing-s;
  }

  &-content {
    @include text;
    display: flex;
    flex-direction: column;

    &__date {
      margin-bottom: $spacing-xs;
    }

    &__title {
      font-weight: 600;
      margin-bottom: $spacing-xs;
    }

    &__info {
      margin: 0;
      padding-left: $spacing-s;
    }
  }
}
</style>
