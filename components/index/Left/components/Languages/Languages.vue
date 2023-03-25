<template>
  <Card title="Languages">
    <LinearProgress :percent="100">Russian</LinearProgress>
    <LinearProgress :percent="85">English</LinearProgress>
  </Card>
</template>

<script>
import { Card, LinearProgress } from "components/shared";

export default {
  name: "Languages",
  components: { LinearProgress, Card },
};
</script>

<style scoped></style>
