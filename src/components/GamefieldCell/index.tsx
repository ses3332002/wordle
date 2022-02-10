import React from 'react'
// import { Card, Row, Col, Typography } from 'antd'
// import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'

function GamefieldCell({ item }: { item: string }): React.ReactElement {
  // const { settingsStore } = useStore()

  return <div className={styles.gamefield_cell}>{item.toUpperCase()}</div>
}

export default observer(GamefieldCell)
