import { createContext, useContext } from 'react'
import { configure, observable } from 'mobx'

import localeStore from './Locale'
import settingsStore from './Settings'

configure({ enforceActions: 'observed' })

class RootStore {
  @observable localeStore = localeStore
  @observable settingsStore = settingsStore
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default rootStore
