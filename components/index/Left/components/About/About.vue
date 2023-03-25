<script>
import { Card, Text } from "components/shared";

export default {
  name: "About",
  components: {
    Card,
    Text,
  },
};
</script>

<template>
  <Card title="About" class-name="card">
    <Text icon="birthday">Born on 27.04.1999 in Moscow, Russia</Text>
    <br />
    <Text icon="location">Currently in Batumi, Georgia</Text>
    <br />
    <Text icon="company" :without-margin="true">
      Lead Frontend-Developer at&nbsp;
      <a href="https://kts.studio" target="_blank" rel="noopener noreferrer">
        KTS Studio
      </a>
    </Text>
  </Card>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.card {
  width: 32rem;
  height: 22.4rem;

  @include portrait {
    height: 100%;
    width: 100%;
  }
}
</style>
