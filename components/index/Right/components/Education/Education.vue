<script>
import { Title } from "components/shared";

import { Course } from "./Course";

export default {
  name: "Education",
  components: {
    Course,
    Title,
  },
};
</script>

<template>
  <div class="education">
    <Title>Education</Title>
    <div>
      <Course
        icon="three"
        title="Three.JS Developer"
        place="Three.JS Journey by Bruno Simon"
        date="January 2023 - March 2023"
      />
      <Course
        icon="fragment"
        title="Web Developer (ex. System Architect)"
        place="VK Education"
        date="September 2018 - June 2020"
      />
      <Course
        icon="brackets"
        title="C++ Beginner Developer"
        place="VK Education"
        date="February 2018 - May 2018"
      />
      <Course
        icon="bachelor"
        title="Bachelor of “Informatics and Computer Engineering”"
        place="Moscow Bauman State University"
        date="September 2017 - June 2021"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.education {
  margin-bottom: $spacing-l;

  @include mobile {
    margin-bottom: $spacing-m;
  }
}
</style>
