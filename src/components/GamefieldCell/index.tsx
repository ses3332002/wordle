import React from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { useStore } from 'stores'

import './styles.scss'

function GamefieldCell({
  item,
  rowNumber,
  cellNumber,
}: {
  item: string
  rowNumber: number
  cellNumber: number
}): React.ReactElement {
  const { settingsStore } = useStore()

  function makeTwist(rowNumber: number): string {
    if (rowNumber === settingsStore.settings.activeRow - 1) {
      return 'twist'
    } else {
      return ''
    }
  }

  function getLetterStyle(item: string): string {
    if (settingsStore.settings.activeRow > rowNumber) {
      if (settingsStore.settings.lettersMissed.includes(item)) {
        return 'missed'
      } else if (settingsStore.settings.lettersMatched.includes(item)) {
        if (settingsStore.settings.hiddenWord[cellNumber] === item) {
          return 'exactly'
        } else {
          return 'matched'
        }
      }
    } else {
      return ''
    }
    return ''
  }

  const className = classNames([
    'gamefield_cell',
    getLetterStyle(item),
    makeTwist(rowNumber),
  ])

  return <div className={className}>{item.toUpperCase()}</div>
}

export default observer(GamefieldCell)
