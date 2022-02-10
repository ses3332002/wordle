import React from 'react'
// import { Card, Row, Col, Typography } from 'antd'
// import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useStore } from 'stores'

function GamefieldCell({
  item,
  rowNumber,
  cellNumber,
}: {
  item: string
  rowNumber: number
  cellNumber: number
}): React.ReactElement {
  const { settingsStore } = useStore()
  const conditionStyle = settingsStore.settings.lettersMissed.includes(item)
    ? 'missed'
    : ''
  return <div className={styles.gamefield_cell}>{item.toUpperCase()}</div>
}

export default observer(GamefieldCell)
