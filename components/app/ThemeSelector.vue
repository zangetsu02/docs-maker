<script lang="ts" setup>
const colorMode = useColorMode()

function onClick() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button
    class="p-4 flex hover:color-gray-3"
    @click="onClick"
  >
    <ColorScheme placeholder="...">
      <div v-if="colorMode.preference === 'dark'" class="i-carbon-sun" />
      <div v-else-if="colorMode.preference === 'light'" class="i-carbon-moon" />
      <div v-else class="i-heroicons-computer-desktop" />
    </ColorScheme>
  </button>
</template>
