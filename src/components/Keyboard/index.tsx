import React from 'react'
import { keyboards } from 'i18n/keyboards'
import { useStore } from 'stores'
import { TLocaleNameStrict } from 'models'

import styles from './styles.module.scss'
import KeyboardRow from 'components/KeyboardRow'

function Keyboard(): React.ReactElement {
  const { localeStore } = useStore()

  const keys = keyboards[localeStore.locale.name as TLocaleNameStrict]

  return (
    <div className={styles.keyboard}>
      <KeyboardRow key={1} rowKeys={keys.slice(0, 12)} />
      <KeyboardRow key={2} rowKeys={keys.slice(12, 24)} />
      <KeyboardRow key={3} rowKeys={keys.slice(24, 36)} />
    </div>
  )
}

export default Keyboard
