import React from 'react'
import { Row } from 'antd'

import KeyboardKey from 'components/KeyboardKey'

import styles from './styles.module.scss'

function KeyboardRow({
  rowKeys,
}: {
  rowKeys: Array<string | null>
}): React.ReactElement {
  return (
    <div className={styles.keyboard_row}>
      <Row align="middle" justify="center">
        {rowKeys.map((item, index) => (
          <KeyboardKey key={index.toString() + item} item={item} />
        ))}
      </Row>
    </div>
  )
}

export default KeyboardRow
