<script>
import { Card } from "components/shared";
import {
  About,
  Tinder,
  Contacts,
  Skills,
  Technologies,
  Languages,
  Interests,
} from "./components";

export default {
  name: "Left",
  components: {
    Interests,
    Languages,
    Technologies,
    Skills,
    About,
    Contacts,
    Tinder,
    Card,
  },
};
</script>

<template>
  <section class="left">
    <div class="row">
      <div class="column">
        <Tinder />
      </div>
      <div class="column">
        <About />
        <Contacts />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <Skills />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <Technologies />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <Languages />
      </div>
      <div class="column">
        <Interests />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.left {
  background: $background-gradient-accent;
  padding: $spacing-xl;

  --cell-spacing: #{$spacing-l};

  @include mobile {
    padding: $spacing-l $spacing-s;
    --cell-spacing: #{$spacing-s};
  }

  .row {
    margin-top: var(--cell-spacing);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    &:first-child {
      margin-top: 0;
    }

    @include tablet {
      display: block;
    }
  }

  .column {
    margin-left: var(--cell-spacing);
    width: 100%;
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-left: 0;
      align-items: flex-start;
    }

    &:last-child {
      align-items: flex-end;
    }

    @include tablet {
      display: block;
      margin-left: 0;
      margin-top: var(--cell-spacing);

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
