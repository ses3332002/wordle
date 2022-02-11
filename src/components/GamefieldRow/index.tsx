import React from 'react'
import { Row } from 'antd'
import classNames from 'classnames/bind'
import GamefieldCell from 'components/GamefieldCell'
import { observer } from 'mobx-react-lite'
import { useStore } from 'stores'
import styles from './styles.module.scss'

function GamefieldRow({
  rowNumber,
  value,
}: {
  rowNumber: number
  value: Array<string>
}): React.ReactElement {
  const { settingsStore } = useStore()
  const cx = classNames.bind(styles)
  const className = cx([
    'gamefield_row',
    rowNumber === settingsStore.settings.activeLine &&
    settingsStore.settings.wordIsIncorrect
      ? 'incorrect'
      : '',
  ])
  return (
    <div className={className}>
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
