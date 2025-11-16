/**
 * Minimal i18n scaffolding so the app is ready to integrate react-i18next or any future provider.
 * Replace the mock dictionary with remote locale bundles when wiring a real translation layer.
 */
export type Locale = 'es' | 'en'

const dictionary: Record<Locale, Record<string, string>> = {
  es: {
    'app.title': 'RADAR',
    'app.subtitle': 'Coherencia entre formación académica y desempeño laboral',
  },
  en: {
    'app.title': 'RADAR',
    'app.subtitle': 'Alignment between academic promise and workplace performance',
  },
}

export const i18nConfig = {
  defaultLocale: 'es' as Locale,
  supportedLocales: ['es', 'en'] as Locale[],
}

export const translate = (key: string, locale: Locale = i18nConfig.defaultLocale): string => {
  const value = dictionary[locale]?.[key]
  return value ?? dictionary[i18nConfig.defaultLocale][key] ?? key
}

export const formatDate = (value: Date, locale: Locale = i18nConfig.defaultLocale, options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', ...options }).format(value)
}
