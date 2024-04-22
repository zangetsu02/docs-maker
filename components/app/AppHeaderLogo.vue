<script setup lang="ts">
const { config } = useDocsMaker()
const logo = computed(() => config.value.header?.logo || false)
const title = computed(() => config.value.header?.title || config.value.title)
</script>

<template>
  <NuxtLink
    class="navbar-logo"
    to="/"
    :aria-label="title"
  >
    <span
      v-if="logo"
      class="logo"
    >
      <component
        :is="logo"
        v-if="typeof logo === 'string'"
      />
      <template v-else-if="typeof logo === 'object' && logo.light && logo.dark">
        <img
          :src="logo.light"
          alt=""
          class="light-img"
        >
        <img
          :src="logo.dark"
          alt=""
          class="dark-img"
        >
      </template>
    </span>

    <span
      v-else
      class="title"
    >
      {{ title }}
    </span>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  --uno: flex items-center flex-none;
}

.logo {
    --uno: w-a ;
}


</style>
