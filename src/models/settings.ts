export interface ISettings {
  settingsIsShown: boolean
  darkScheme: boolean | undefined
  activeLine: number
  testingLine: string
  isStarted: boolean
  hiddenWord: string
  lettersMatched: Array<string>
  attempts: Array<string>
  lettersMissed: Array<string>
  gameField: Array<Array<string>>
}
