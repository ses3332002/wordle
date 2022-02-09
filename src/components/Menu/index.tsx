import React from 'react'
import { Button } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { useStore } from 'stores'
import styles from './styles.module.scss'

function Menu(): React.ReactElement {
  const { settingsStore } = useStore()
  return (
    <Button
      onClick={settingsStore.showSettings}
      className={styles.menu_button}
      type="text"
    >
      <SettingOutlined style={{ fontSize: 24 }} />
    </Button>
  )
}

export default Menu
