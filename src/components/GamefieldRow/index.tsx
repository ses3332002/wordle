import React from 'react'
import { Row } from 'antd'
import styles from './styles.module.scss'
import GamefieldCell from 'components/GamefieldCell'
import { observer } from 'mobx-react-lite'

function GamefieldRow({
  rowNumber,
  value,
}: {
  rowNumber: number
  value: Array<string>
}): React.ReactElement {
  // const { Title, Text } = Typography
  return (
    <div className={styles.gamefield_row}>
      <Row align="middle" justify="space-between">
        {value.map((item, index) => (
          <GamefieldCell
            rowNumber={rowNumber}
            cellNumber={index}
            item={item}
            key={index.toString() + item}
          />
        ))}
      </Row>
    </div>
  )
}

export default observer(GamefieldRow)
