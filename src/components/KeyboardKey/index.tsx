import React from 'react'
import { Button } from 'antd'
import { useStore } from 'stores'

// import styles from './styles.module.scss'
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
  const { settingsStore } = useStore()

  function handleClick(): void {
    if (item === 'backspace') {
      settingsStore.resetLetter()
    } else if (item === 'check') {
      settingsStore.checkWord()
    } else {
      settingsStore.testLetter(item as string)
    }
  }

  if (!item) {
    return null
  }
  return (
    <Button
      type={isService ? 'primary' : 'default'}
      style={{ margin: 4, fontSize: 20, height: 46 }}
      size="large"
      onClick={handleClick}
    >
      {item === 'backspace' ? (
        <>
          <LeftOutlined />
          <CloseSquareOutlined style={{ marginLeft: -6 }} />
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
