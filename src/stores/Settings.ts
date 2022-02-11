import {
  observable,
  action,
  // computed,
  autorun,
  makeAutoObservable,
  // reaction,
  // toJS,
} from 'mobx'
import { ISettings } from '../models'
import { getCurrentColorScheme } from '../themes'

class SettingsStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable settings: ISettings = {
    darkScheme: undefined,
    settingsIsShown: false,
    activeLine: 0,
    testingLine: '',
    isStarted: false,
    hiddenWord: 'песня',
    words: ['песня', 'пісня', 'world'],
    lettersMissed: [],
    lettersMatched: [],
    wordIsIncorrect: false,
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

  @action addLetter = (letter: string): void => {
    if (this.settings.testingLine.length === 5) {
      return
    }
    this.settings.isStarted = true
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
      } else {
        if (this.settings.activeLine < 6) {
          this.settings.activeLine++
        }
      }
      this.checkLetters()
      this.settings.testingLine = ''
    }
  }

  checkLetters = (): void => {
    this.settings.testingLine.split('').forEach(letter => {
      if (this.settings.hiddenWord.includes(letter)) {
        this.settings.lettersMatched.push(letter)
      } else {
        this.settings.lettersMissed.push(letter)
      }
    })
    if (this.settings.hiddenWord === this.settings.testingLine) {
      console.log('you won!')
    }
  }

  fillLine = (): void => {
    this.settings.gameField[
      this.settings.activeLine
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
})

export default settingsStore
