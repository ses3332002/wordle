export interface IUser {
  id: number
  name: string
  role: string
  position: string
  projects: number
  revenue: number
  earnings: number
  dif: number
  seriesA: number
  imgSrc: string
  messages: number
  company: {
    name: string
  }
  emailData: Array<{
    month: string
    value: number
    type: 'Series A' | 'Series B' | 'Series C' | undefined
  }>
}
