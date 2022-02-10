import React from 'react'
import { Row } from 'antd'

import styles from './styles.module.scss'
import KeyboardKey from 'components/KeyboardKey'

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
