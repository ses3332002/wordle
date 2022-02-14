import React from 'react'
import { observer } from 'mobx-react-lite'
import GamefieldRow from 'components/GamefieldRow'
import { useStore } from 'stores'

function GameField(): React.ReactElement {
  const { settingsStore } = useStore()

  return (
    <>
      {settingsStore.settings.gameField.map((item, index) => (
        <GamefieldRow rowNumber={index} value={item} key={index.toString()} />
      ))}
    </>
  )
}

export default observer(GameField)
