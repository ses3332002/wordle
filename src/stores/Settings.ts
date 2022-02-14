import {
  observable,
  action,
  // computed,
  autorun,
  makeAutoObservable,
  // reaction,
  // toJS,
} from 'mobx'
import { ISettings, TLocaleNameStrict } from '../models'
import { wordsArray } from 'i18n/words'
import { getCurrentColorScheme } from '../themes'
import { message } from 'antd'
import localeStore from './Locale'
import { t } from 'i18next'

class SettingsStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable settings: ISettings = {
    darkScheme: undefined,
    settingsIsShown: false,
    activeRow: 0,
    testingLine: '',
    isStarted: false,
    hiddenWord: '',
    words: [],
    lettersMissed: [],
    lettersMatched: [],
    wordIsIncorrect: false,
    isWon: false,
    isLose: false,
    gameField: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ],
  }

  @action showSettings = (): void => {
    this.settings.settingsIsShown = true
  }

  @action hideSettings = (): void => {
    this.settings.settingsIsShown = false
  }

  @action setDarkScheme = (state: boolean): void => {
    this.settings.darkScheme = state
  }

  @action startGame = (): void => {
    this.settings.isWon = false
    this.settings.isLose = false
    this.settings.isStarted = true
    this.settings.activeRow = 0
    this.settings.words =
      wordsArray[localeStore.locale.name as TLocaleNameStrict]
    this.settings.hiddenWord = this.settings.words[
      Math.floor(Math.random() * this.settings.words.length)
    ]
    this.settings.testingLine = ''
    this.settings.lettersMissed.length = 0
    this.settings.lettersMatched.length = 0
    this.settings.gameField = [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ]
  }

  @action addLetter = (letter: string): void => {
    if (this.settings.testingLine.length === 5) {
      return
    }
    this.settings.testingLine = this.settings.testingLine + letter
    this.fillLine()
  }

  @action resetLetter = (): void => {
    if (this.settings.testingLine.length === 0) {
      return
    }
    this.settings.testingLine = this.settings.testingLine.slice(0, -1)
    this.settings.wordIsIncorrect = false
    this.fillLine()
  }

  @action checkWord = (): void => {
    if (this.settings.testingLine.length !== 5) {
      return
    } else {
      if (!this.settings.words.includes(this.settings.testingLine)) {
        this.settings.wordIsIncorrect = true
        return
      }
      this.settings.testingLine.split('').forEach(letter => {
        if (this.settings.hiddenWord.includes(letter)) {
          this.settings.lettersMatched.push(letter)
        } else {
          this.settings.lettersMissed.push(letter)
        }
      })

      if (this.settings.hiddenWord === this.settings.testingLine) {
        const temp = setTimeout(() => {
          this.settings.isWon = true
          this.settings.isStarted = false
          clearTimeout(temp)
        }, 1000)
      } else if (
        this.settings.activeRow ===
        this.settings.gameField.length - 1
      ) {
        const temp = setTimeout(() => {
          this.settings.isLose = true
          this.settings.isStarted = false
          clearTimeout(temp)
        }, 1000)
      }

      this.settings.activeRow++
      this.settings.testingLine = ''
    }
  }

  fillLine = (): void => {
    this.settings.gameField[
      this.settings.activeRow
    ] = this.settings.testingLine
      .split('')
      .concat(new Array(5 - this.settings.testingLine.length).fill(''))
  }
}

const settingsStore = new SettingsStore()

function checkLocalStorage(darkScheme: boolean | undefined): void {
  if (localStorage.getItem('colorScheme')) {
    if (darkScheme === undefined) {
      settingsStore.setDarkScheme(
        localStorage.getItem('colorScheme') === 'dark'
      )
      return
    }
    if (
      localStorage.getItem('colorScheme') !== (darkScheme && 'dark') ||
      'light'
    ) {
      localStorage.setItem('colorScheme', (darkScheme && 'dark') || 'light')
    }
  } else if (!localStorage.getItem('colorScheme')) {
    settingsStore.setDarkScheme(getCurrentColorScheme() === 'dark')
    localStorage.setItem('colorScheme', getCurrentColorScheme())
  }
}

autorun(() => {
  checkLocalStorage(settingsStore.settings.darkScheme)

  if (settingsStore.settings.wordIsIncorrect) {
    message.warning(t('no_such_word'), 1)
  }
})

export default settingsStore
