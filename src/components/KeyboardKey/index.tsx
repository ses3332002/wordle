import React from 'react'
import { Button } from 'antd'

import styles from './styles.module.scss'
import {
  LeftOutlined,
  CloseSquareOutlined,
  CheckOutlined,
} from '@ant-design/icons'

function KeyboardKey({
  item,
}: {
  item: string | null
}): React.ReactElement | null {
  const isService = item === 'check' || item === 'backspace'

  if (!item) {
    return null
  }
  return (
    <Button
      type={isService ? 'primary' : 'default'}
      style={{ margin: 4, fontSize: 20, height: 46 }}
      size="large"
    >
      {item === 'backspace' ? (
        <>
          <LeftOutlined />
          <CloseSquareOutlined style={{ marginLeft: -5 }} />
        </>
      ) : item === 'check' ? (
        <CheckOutlined />
      ) : (
        item[0].toUpperCase().concat(item.substring(1))
      )}
    </Button>
  )
}

export default KeyboardKey
