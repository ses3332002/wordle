import { observable, action, computed, autorun, makeAutoObservable } from 'mobx'
import { ISettings } from '../models'

class SettingsStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable settings: ISettings = {
    darkScheme: true,
    settingsIsShown: false,
  }

  @action showSettings = (): void => {
    this.settings.settingsIsShown = true
  }

  @action hideSettings = (): void => {
    this.settings.settingsIsShown = false
  }

  @action setDarkScheme = (state: boolean): void => {
    this.settings.darkScheme = state
  }
}

const settingsStore = new SettingsStore()

// function checkLocalStorage(locale: TLocaleName) {
//   if (localStorage.getItem('locale')) {
//     if (locale === undefined) {
//       localeStore.setLocale(localStorage.getItem('locale') as TLocaleName)
//       return
//     }
//     if (localStorage.getItem('locale') !== locale) {
//       localStorage.setItem('locale', locale as string)
//     }
//   } else if (!localStorage.getItem('locale')) {
//     localeStore.setLocale(i18n.resolvedLanguage as TLocaleName)
//     localStorage.setItem('locale', i18n.resolvedLanguage)
//   }
// }

// autorun(() => {
//   checkLocalStorage(localeStore.locale.name)
//   moment.locale(localeStore.locale.name)
//   i18n.changeLanguage(localeStore.locale.name)
//   doc.setAttribute('lang', localeStore.locale.name as string)
// })

export default settingsStore
