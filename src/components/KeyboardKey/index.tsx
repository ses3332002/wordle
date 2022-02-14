import React from 'react'
import { Button } from 'antd'
import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'
import { LeftOutlined, CheckOutlined } from '@ant-design/icons'

function KeyboardKey({
  item,
}: {
  item: string | null
}): React.ReactElement | null {
  const isService = item === 'check' || item === 'backspace'
  const { settingsStore } = useStore()
  const cx = classNames.bind(styles)
  const className = cx([
    settingsStore.settings.lettersMatched.includes(item as string)
      ? 'matched'
      : '',
    settingsStore.settings.lettersMissed.includes(item as string)
      ? 'missed'
      : '',
  ])

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
    <div className={styles.keyboard_key}>
      <Button
        type={isService ? 'primary' : 'default'}
        danger={item === 'backspace' ? true : false}
        style={{ margin: 4, fontSize: 20, height: 46 }}
        size="large"
        onClick={handleClick}
        disabled={!settingsStore.settings.isStarted}
        className={className}
      >
        {item === 'backspace' ? (
          <LeftOutlined />
        ) : item === 'check' ? (
          <CheckOutlined />
        ) : (
          item[0].toUpperCase().concat(item.substring(1))
        )}
      </Button>
    </div>
  )
}

export default observer(KeyboardKey)
