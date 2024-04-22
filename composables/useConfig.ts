export const useDocsMaker = () => {
  const appConfig = computed(() => useAppConfig()?.config || {})
  const { navPageFromPath, navDirFromPath, navKeyFromPath } = useContentHelpers()
  const { navigation, page } = useContent()
  const route = useRoute()

  /**
   * Returns fallbacked values for `main`, `header`, `aside` and `footer`.
   *
   * It allows to configure `app.config` per page/_dir.
   */
  const config = computed(
    () => {
      const titleTemplate = appConfig?.value?.titleTemplate || navKeyFromPath(page?.value?._path, 'titleTemplate', navigation.value || []) || `%s · ${appConfig?.value?.title || 'Config'}`
      const main = appConfig?.value?.main || {}
      const header = appConfig?.value?.header || {}
      const aside = appConfig?.value?.aside || {}
      const footer = appConfig?.value?.footer || {}

      return {
        // Raw appConfig
        ...appConfig.value,

        // Merged attributes
        titleTemplate,
        main: {
          ...main,
          ...navKeyFromPath(route.path, 'main', navigation.value || []),
          ...page.value?.main,
        } as typeof main,
        header: {
          ...header,
          ...navKeyFromPath(route.path, 'header', navigation.value || []),
          ...page.value?.header,
        } as typeof header,
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, 'aside', navigation.value || []),
          ...page.value?.aside,
        } as typeof aside,
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, 'footer', navigation.value || []),
          ...page.value?.footer,
        } as typeof footer,
      }
    },
  )

  /**
   * Current aside tree.
   */
  const tree = computed(() => {
    let nav = navigation.value || []
    const _path = route.path
    const level = config?.value?.aside?.level || 0
    const filtered = config?.value?.aside?.exclude || []

    if (level) {
      // Filter if `aside.level` is enabled in appConfig configuration
      const path = _path.split('/')

      // Get level
      const leveledPath = path.splice(0, 1 + level).join('/')

      nav = navDirFromPath(leveledPath, nav) || []

      if (!Array.isArray(nav))
        nav = [nav]
    }

    // No navigation found; try to resolve page url
    if (nav.length === 0) {
      nav = navPageFromPath(page.value?._path || '/', navigation.value || [])

      if (!nav)
        return []

      if (!Array.isArray(nav))
        nav = [nav]
    }

    // Filtered using `aside.exclude` in appConfig configuration
    return nav.filter((item: any) => {
      if (filtered.includes(item._path))
        return false
      return true
    })
  })

  return { tree, config }
}
