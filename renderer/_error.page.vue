<template>
  <div v-if="is404">
    <h1>404 Page Not Found</h1>
    <p>This page could not be found.</p>
  </div>
  <div v-else>
    <h1>500 Internal Server Error</h1>
    <p>Something went wrong.</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps(["is404"]);
</script>
