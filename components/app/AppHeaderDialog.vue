<script setup lang="ts">
const { navigation } = useContent()
const { config } = useDocsMaker()

const show = ref(false)

const filtered = computed(() => config.value.aside?.exclude || [])

const links = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path)) { return false }
    return true
  })
})

const { close, open } = useMenu()

watch(show, v => (v ? open() : close()))
</script>

<template>
  <button
    aria-label="Menu"
    @click="show = true"
  >
  <div class="i-heroicons:bars-3-16-solid w-1em h-1em"/>
  </button>

  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <teleport to="body">
    <nav
      v-if="show"
      class="dialog"
      @click="show = false"
    >
      <div @click.stop>
        <div class="wrapper">
          <button
          class="flex pt-4 pr-4 pb-4 pl-0 relative z-10 color-gray-500 hover:color-gray-700 dark:color-gray-400 dark:hover:color-gray-200"
            aria-label="Menu"
            @click="show = false"
          >
          <div class="i-heroicons:x-mark-16-solid w-6 h-6"/>
          </button>

          <div class="icons">
            <!-- <AppSocialIcons /> -->
          </div>
        </div>

        <!-- <DocsAsideTree :links="links" /> -->
      </div>
    </nav>
  </teleport>
</template>

<style scoped lang="scss">
.dialog {
  --uno: fixed z-50 flex items-end overflow-y-auto position-inset-0 backdrop-saturate-200 backdrop-blur-20 bg-[rgba(255, 255, 255, 0.5)] dark:bg-[rgba(0, 0, 0, 0.5)] lg:hidden;

  > div {
    --uno: max-w-[20rem] w-full min-h-full p-4 bg-[#fff] dark:bg-[#0b0a0a];

    > div {
      --uno: flex h-[64px] items-center justify-between border-b-transparent gap-2 ;
    }
  }
}
</style>
