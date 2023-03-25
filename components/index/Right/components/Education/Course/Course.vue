<template>
  <div class="course">
    <div class="course-icon">
      <Icon :type="icon" />
    </div>
    <div class="course-content">
      <div class="course-content__title">
        {{ title }}
      </div>
      <a
        class="course-content__place"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ place }}
      </a>
      <div class="course-content__date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Icon, IconType, Text } from "components/shared";

type CourseProps = {
  icon: IconType;
  title: string;
  place: string;
  date: string;
};

export default defineComponent({
  name: "Course",
  components: { Text, Icon },
  props: {
    icon: {
      type: String as PropType<CourseProps["icon"]>,
      required: true,
    },
    title: {
      type: String as PropType<CourseProps["title"]>,
      required: true,
    },
    place: {
      type: String as PropType<CourseProps["place"]>,
      required: true,
    },
    date: {
      type: String as PropType<CourseProps["date"]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.course {
  display: flex;
  margin-bottom: $spacing-s;

  &:last-child {
    margin-bottom: 0;
  }

  &-icon {
    margin-right: $spacing-s;
    color: $accent-second;
  }

  &-content {
    @include text;
    color: $content-primary;

    &__title {
      margin-bottom: $spacing-xs;
      font-weight: 600;
    }

    &__place {
      display: block;
      margin-bottom: $spacing-xs;
      text-decoration: underline;
    }

    &__date {
      color: $content-secondary;
    }
  }
}
</style>
