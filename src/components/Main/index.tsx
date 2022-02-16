import React from 'react'
import { observer } from 'mobx-react-lite'

import GameField from 'components/GameField'
import WelcomeScreen from 'components/WelcomeScreen'

import { useStore } from 'stores'

import styles from './styles.module.scss'

function Main(): React.ReactElement {
  const { settingsStore } = useStore()

  return (
    <div className={styles.container}>
      <GameField />
      {settingsStore.settings.isStarted ? null : <WelcomeScreen />}
    </div>
  )
}

export default observer(Main)
