import React from 'react'
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { colorSchemeQuery, getCurrentColorScheme } from '../../themes'
// import { useTranslation } from 'react-i18next'
import 'moment/locale/he'
import 'moment/locale/ru'
import 'moment/locale/uk'
import Header from 'components/Header'
import Main from 'components/Main'
import Keyboard from 'components/Keyboard'
import { observer } from 'mobx-react-lite'
import store from 'stores'
import { themes } from 'themes'
import styles from './styles.module.scss'

const App = (): React.ReactElement => {
  // const { t } = useTranslation()
  colorSchemeQuery.addEventListener('change', () => {
    store.settingsStore.setDarkScheme(
      getCurrentColorScheme() === 'dark' ? true : false
    )
  })

  return (
    <Provider {...store}>
      <ThemeSwitcherProvider
        defaultTheme={
          store.settingsStore.settings.darkScheme ? 'dark' : 'light'
        }
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
    </Provider>
  )
}

export default observer(App)
