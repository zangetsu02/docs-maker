<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<style>
.dark {
  color-scheme: dark;
}

body {
  --uno: bg-primary;
}
</style>
