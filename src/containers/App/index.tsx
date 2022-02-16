import React from 'react'
import { ConfigProvider } from 'antd'
import { observer } from 'mobx-react-lite'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { colorSchemeQuery, getCurrentColorScheme, themes } from 'themes'

import 'moment/locale/he'
import 'moment/locale/ru'
import 'moment/locale/uk'

import Header from 'components/Header'
import Main from 'components/Main'
import Keyboard from 'components/Keyboard'

import store from 'stores'

import styles from './styles.module.scss'

const App = (): React.ReactElement => {
  colorSchemeQuery.addEventListener('change', () => {
    store.settingsStore.setDarkScheme(
      getCurrentColorScheme() === 'dark' ? true : false
    )
  })

  return (
    <ThemeSwitcherProvider
      defaultTheme={store.settingsStore.settings.darkScheme ? 'dark' : 'light'}
      themeMap={themes}
      insertionPoint={document.getElementById('inject-styles-here')}
    >
      <ConfigProvider
        direction={store.localeStore.antdDirection}
        locale={store.localeStore.antdLocale}
      >
        <div className={styles.app}>
          <Header />
          <Main />
          <Keyboard />
        </div>
      </ConfigProvider>
    </ThemeSwitcherProvider>
  )
}

export default observer(App)
