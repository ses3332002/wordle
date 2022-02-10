import React from 'react'
import { Button } from 'antd'
import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'

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
  const { settingsStore } = useStore()

  function handleClick(): void {
    if (item === 'backspace') {
      settingsStore.resetLetter()
    } else if (item === 'check') {
      settingsStore.checkWord()
    } else {
      settingsStore.addLetter(item as string)
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
      className={
        settingsStore.settings.lettersMatched.includes(item)
          ? styles.matched
          : settingsStore.settings.lettersMissed.includes(item)
          ? styles.missed
          : ''
      }
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

export default observer(KeyboardKey)
