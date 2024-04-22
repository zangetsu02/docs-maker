<script lang="ts" setup>
const { config } = useDocsMaker()

useHead({
  titleTemplate: config.value.titleTemplate,
})
watch(
  () => config.value.titleTemplate,
  () => useHead({ titleTemplate: config.value.titleTemplate }),
)
</script>

<template>
  <div class="app-layout">
    <!--TODO <AppLoadingBar /> -->
    <AppHeader />
    <main>
      <slot />
    </main>
    <!--TODO <AppFooter /> -->
  </div>
</template>

<style scoped>

</style>
