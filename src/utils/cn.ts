export const cn = (...classes: Array<string | boolean | undefined | null | Record<string, boolean>>): string => {
  const tokens: string[] = []
  classes.forEach((value) => {
    if (!value) return
    if (typeof value === 'string') {
      tokens.push(value)
      return
    }
    if (typeof value === 'object') {
      Object.entries(value).forEach(([key, enabled]) => {
        if (enabled) tokens.push(key)
      })
    }
  })
  return tokens.join(' ')
}
