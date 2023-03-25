<script>
import { Title } from "components/shared";

import { Job } from "./Job";

export default {
  name: "Education",
  components: {
    Job,
    Title,
  },
};
</script>

<template>
  <div class="experience">
    <Title>Experience</Title>
    <div>
      <Job
        date="February 2020 - current"
        title="KTS Studio: Lead Frontend-Developer in Special Projects Unit"
      >
        <li class="job-info">
          Frontend-development of 100+ advertising game-like projects
          (platformers, runners, quizes, puzzles, etc). My most difficult
          projects were a game like Fallout Shelter and a quest-game with
          interactive 3D-panorama.
        </li>
        <li class="job-info">
          Leading a team of 8 frontend-developers. Reqular code-review.
          Mentoring. Interviewing.
        </li>
        <li class="job-info">
          Participation in the main processes of the department like estimation
          and sale processes.
        </li>
        <li class="job-info">
          Creation of internal instruments for “copy-paste” reducement and
          development speed increasing. For example, utility for quick project
          setup (like Create React App).
        </li>
        <li class="job-info">
          Full control of creation of KTS Market. Our team have created catalog
          of frequently ordered mechanics that could be used as demo-projects by
          managers during sales processes and by developers as mechanics
          implementations examples.
        </li>
        <li class="job-info">
          Participation in creation of course about frontend-development for KTS
          Metalcass. Students homeworks checking.
        </li>
      </Job>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.experience {
  margin-bottom: $spacing-l;

  @include mobile {
    margin-bottom: $spacing-m;
  }
}

.job-info {
  margin-bottom: $spacing-xs;
  color: $content-primary;
}
</style>
