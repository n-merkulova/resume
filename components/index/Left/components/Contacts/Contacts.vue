<script>
import { Card, Text } from "components/shared";

export default {
  name: "Contacts",
  components: {
    Card,
    Text,
  },
};
</script>

<template>
  <Card title="Contacts" class-name="card">
    <div class="contacts">
      <Text icon="email"
        ><a
          href="mailto:nadyamerk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >nadyamerk@gmail.com</a
        ></Text
      >
      <Text icon="telegram"
        ><a href="https://t.me/nmerk" target="_blank" rel="noopener noreferrer"
          >@nmerk</a
        ></Text
      >
      <Text icon="github"
        ><a
          href="https://github.com/n-merkulova"
          target="_blank"
          rel="noopener noreferrer"
          >n-merkulova</a
        ></Text
      >
      <Text icon="instagram" :without-margin="true"
        ><a
          href="https://www.instagram.com/n.merk"
          target="_blank"
          rel="noopener noreferrer"
          >@n.merk</a
        ></Text
      >
    </div>
  </Card>
</template>

<style scoped lang="scss">
@import "styles/mixins.scss";

.card {
  width: 32rem;
  height: 22.4rem;
  margin-top: $spacing-l;

  @include portrait {
    height: 100%;
    width: 100%;
  }

  @include mobile {
    margin-top: $spacing-s;
  }

  .contacts {
    display: flex;
    flex-direction: column;
  }
}
</style>
