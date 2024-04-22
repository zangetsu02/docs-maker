<script setup lang="ts">
const { config } = useDocsMaker()
const { navigation } = useContent()
const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)
</script>

<template>
  <header
    :class="{ 'has-dialog': hasDialog }"
  >
    <div class="app-container">
      <div class="section left">
        <AppHeaderDialog v-if="hasDialog" />
        <AppHeaderLogo/>  
      </div>
      <div class="section center">
        <AppHeaderLogo  v-if="hasDialog"/>  
  
      </div>
      <div class="section right">
        <ThemeSelector />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  --uno: sticky z-10 top-0 w-full border-b-1 border-primary bg-primary h-[64px] backdrop-saturate-200 backdrop-blur-20;

 &.has-dialog {
  .section.left :deep(.navbar-logo) {
  --uno: hidden;
  }
 }
}

.app-container {
  --uno: grid gap-2 grid-cols-12 h-full w-full m-inline-a px-4 sm:px-6 md:px-6;
}

.section {
  --uno: flex items-center;

  &.left {
    --uno: grid-col-span-4;
  }
  &.center {
    --uno: grid-col-span-4 justify-center z-1;
  }
  &.right {
    --uno: grid-col-span-4 justify-end mr-4;
  }
}


</style>
