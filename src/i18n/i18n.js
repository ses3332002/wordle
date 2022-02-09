import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationsEN from './en/en.json'
import translationsHE from './he/he.json'
import translationsRU from './ru/ru.json'
import translationsUK from './uk/uk.json'

const resources = {
  en: {
    translation: translationsEN,
  },
  he: {
    translation: translationsHE,
  },
  ru: {
    translation: translationsRU,
  },
  uk: {
    translation: translationsUK,
  },
}

const options = {
  order: [
    'navigator',
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'htmlTag',
    'path',
    'subdomain',
  ],

  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  htmlTag: document.documentElement,
  cookieOptions: { path: '/', sameSite: 'strict' },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    detection: options,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
