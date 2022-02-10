import { observable, action, computed, autorun, makeAutoObservable } from 'mobx'
import { ISettings } from '../models'
import { getCurrentColorScheme } from '../themes'

class SettingsStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable settings: ISettings = {
    darkScheme: undefined,
    settingsIsShown: false,
    activeLine: 1,
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

function checkLocalStorage(darkScheme: boolean | undefined): void {
  if (localStorage.getItem('colorScheme')) {
    if (darkScheme === undefined) {
      settingsStore.setDarkScheme(
        localStorage.getItem('colorScheme') === 'dark'
      )
      return
    }
    if (
      localStorage.getItem('colorScheme') !== (darkScheme && 'dark') ||
      'light'
    ) {
      localStorage.setItem('colorScheme', (darkScheme && 'dark') || 'light')
    }
  } else if (!localStorage.getItem('colorScheme')) {
    settingsStore.setDarkScheme(getCurrentColorScheme() === 'dark')
    localStorage.setItem('colorScheme', getCurrentColorScheme())
  }
}

autorun(() => {
  checkLocalStorage(settingsStore.settings.darkScheme)
})

export default settingsStore
