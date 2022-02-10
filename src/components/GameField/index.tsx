import React from 'react'
// import { Card, Row, Col } from 'antd'
import { useStore } from 'stores'

// import styles from './styles.module.scss'
import GamefieldRow from 'components/GamefieldRow'
import { observer } from 'mobx-react-lite'

function GameField(): React.ReactElement {
  const { settingsStore } = useStore()
  return (
    <>
      {settingsStore.settings.gameField.map((item, index) => (
        <GamefieldRow value={item} key={index.toString()} />
      ))}
    </>
  )
}

export default observer(GameField)
