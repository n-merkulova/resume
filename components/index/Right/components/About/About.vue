<script>
import { Text, Title } from "components/shared";
export default {
  name: "About",
  components: {
    Text,
    Title,
  },
};
</script>

<template>
  <div class="about">
    <Title>Hello, I am Nadya!</Title>
    <Text>
      And I am in love with creating beauty in web.
      <br />
      <br />
      I started as a frontend trainee with basics of JS + HTML5 + CSS. My
      motivation of becoming a frontend developer was a desire to create really
      impressive web-projects - web-sites with incredible designs and almost
      impossible animations, games with extraordinary gameplay and view and so
      much more. During my training I have leared React, TypeScript, MobX, SCSS
      and some other technologies, so it became easier to create
      frontend-wonders. Also I have some browser game development experience - I
      have worked with JS game framework Phaser and 3D library Three.js.
      <br />
      <br />
      Then I became a frontend team lead and I fell in love again - this time
      with teaching other people how to create really beautiful web-projects -
      not only visually, but in code. I have improved developments processes of
      my team by creating internal libraries, which helped to reduce so-called
      "copy-paste" and speed up new projects set up. Also then I got new
      responsibilities and learned how to deal with distributing tasks between
      team members, helping them with any difficulties, conducting code reviews
      and so on.
      <br />
      <br />
      Moreover, I am a mentor. I love helping other frontend developers to
      overcome difficulties during training, find professional way and set
      goals. And I always do support my menti no matter what.
    </Text>
  </div>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.about {
  margin-bottom: $spacing-l;

  @include mobile {
    margin-bottom: $spacing-m;
  }
}
</style>
