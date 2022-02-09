import React, { useState } from 'react'
import { ConfigProvider } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useTranslation } from 'react-i18next'
import 'moment/locale/he'
import Header from 'components/Header'
import Main from 'components/Main'
import styles from './styles.module.scss'

import { Provider } from 'mobx-react'
import store from 'stores'
// export let doc = document.querySelector('HTML') as HTMLElement

const App = () => {
  const { t } = useTranslation()

  const themes = {
    light: `${process.env.PUBLIC_URL}/styles/antd.min.css`,
    dark: `${process.env.PUBLIC_URL}/styles/antd.dark.min.css`,
  }

  const [currentColorScheme, setCurrentColorScheme] = useState(
    getCurrentColorScheme
  )

  function getCurrentColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  function colorSchemeChangeHandler() {
    setCurrentColorScheme(getCurrentColorScheme())
  }

  let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  colorSchemeQuery.addEventListener('change', colorSchemeChangeHandler)

  return (
    <Provider {...store}>
      <ThemeSwitcherProvider
        defaultTheme={currentColorScheme}
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
          </div>
        </ConfigProvider>
      </ThemeSwitcherProvider>
    </Provider>
  )
}

export default App
