import React from 'react'
import { observer } from 'mobx-react-lite'
import { message } from 'antd'
import { useTranslation } from 'react-i18next'

import GamefieldRow from 'components/GamefieldRow'
import { useStore } from 'stores'

// import styles from './styles.module.scss'

function GameField(): React.ReactElement {
  const { settingsStore } = useStore()
  const { t } = useTranslation()

  if (settingsStore.settings.wordIsIncorrect) {
    message.warning(t('no_such_word'), 1)
  }

  return (
    <>
      {settingsStore.settings.gameField.map((item, index) => (
        <GamefieldRow rowNumber={index} value={item} key={index.toString()} />
      ))}
    </>
  )
}

export default observer(GameField)
