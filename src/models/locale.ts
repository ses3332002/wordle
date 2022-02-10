export type TLocaleNameStrict = 'en' | 'he' | 'ru' | 'uk'

export type TLocaleName = TLocaleNameStrict | undefined

export interface ILocale {
  name: TLocaleName
}
