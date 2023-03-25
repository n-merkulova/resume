<template>
  <Card class-name="card">
    <div class="content">
      <div class="content__image" />
      <div class="content__text">
        <Title>Nadezhda Merkulova</Title>
        <Text icon="person">23 years old</Text>
        <br />
        <Text icon="development" :without-margin="true">Web-developer</Text>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Card, Title, Text } from "components/shared";

export default defineComponent({
  name: "Tinder",
  components: {
    Card,
    Title,
    Text,
  },
});
</script>

<style scoped lang="scss">
@import "styles/mixins.scss";

.card {
  height: 48rem;
  width: 32rem;
  padding: 0;

  @include portrait {
    height: 100%;
    width: 100%;
  }

  .content {
    height: 100%;

    display: flex;
    flex-direction: column;

    &__image {
      width: 100%;
      height: 100%;
      position: relative;
      background: url("./img/me.png") no-repeat center / cover;

      &::before {
        content: "";
        display: block;
        width: 100%;
        padding-top: 100%;

        @include tablet {
          padding-top: 80%;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: $background-gradient;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__text {
      padding: $spacing-m;
    }
  }
}
</style>
