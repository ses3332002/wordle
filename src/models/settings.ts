export interface ISettings {
  settingsIsShown: boolean
  darkScheme: boolean | undefined
  activeRow: number
  testingLine: string
  isStarted: boolean
  isWon: boolean
  hiddenWord: string
  lettersMatched: Array<string>
  words: Array<string>
  lettersMissed: Array<string>
  gameField: Array<Array<string>>
  wordIsIncorrect: boolean
  isLose: boolean
}
