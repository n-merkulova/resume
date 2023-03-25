<template>
  <Card title="Interests">
    <div class="interests">
      <Text icon="gamepad">Gaming</Text>
      <Text icon="globe">Travelling</Text>
      <Text icon="candle">Candle making</Text>
      <Text icon="ski">Skiing</Text>
    </div>
  </Card>
</template>

<script>
import { Card, Text } from "components/shared";

export default {
  name: "Interests",
  components: { Text, Card },
};
</script>

<style scoped lang="scss">
.interests {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
