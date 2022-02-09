import GameField from 'components/GameField'
import React from 'react'
import styles from './styles.module.scss'

function Main(): React.ReactElement {
  return (
    <div className={styles.container}>
      <GameField />
    </div>
  )
}

export default Main
