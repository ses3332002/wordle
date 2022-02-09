import {
  observable,
  action,
  computed,
  reaction,
  makeAutoObservable,
} from 'mobx'
import { IUser } from '../models'

class UserStore {
  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.user,
      _ => console.log(this.user)
    )
  }

  @observable user: IUser = {
    id: 0,
    role: 'admin',
    name: 'Henry Price',
    messages: 3,
    position: 'UI/UX DEsigner',
    projects: 125,
    revenue: 1245,
    earnings: 34252,
    dif: 12,
    seriesA: 67,
    imgSrc: 'https://picsum.photos/seed/picsum/100',
    company: { name: '' },
    emailData: [
      {
        month: 'Jan',
        type: 'Series A',
        value: 5,
      },
      {
        month: 'Jan',
        type: 'Series B',
        value: 6,
      },
      {
        month: 'Jan',
        type: 'Series C',
        value: 10,
      },
      {
        month: 'Feb',
        type: 'Series A',
        value: 15,
      },
      {
        month: 'Feb',
        type: 'Series B',
        value: 3,
      },
      {
        month: 'Feb',
        type: 'Series C',
        value: 4,
      },
      {
        month: 'Mar',
        type: 'Series A',
        value: 7,
      },
      {
        month: 'Mar',
        type: 'Series B',
        value: 11,
      },
      {
        month: 'Mar',
        type: 'Series C',
        value: 2,
      },
      {
        month: 'Apr',
        type: 'Series A',
        value: 11,
      },
      {
        month: 'Apr',
        type: 'Series B',
        value: 3,
      },
      {
        month: 'Apr',
        type: 'Series C',
        value: 6,
      },
      {
        month: 'May',
        type: 'Series A',
        value: 4,
      },
      {
        month: 'May',
        type: 'Series B',
        value: 1,
      },
      {
        month: 'May',
        type: 'Series C',
        value: 12,
      },
      {
        month: 'Jun',
        type: 'Series A',
        value: 11,
      },
      {
        month: 'Jun',
        type: 'Series B',
        value: 3,
      },
      {
        month: 'Jun',
        type: 'Series C',
        value: 6,
      },
      {
        month: 'Jul',
        type: 'Series A',
        value: 7,
      },
      {
        month: 'Jul',
        type: 'Series B',
        value: 8,
      },
      {
        month: 'Jul',
        type: 'Series C',
        value: 9,
      },
      {
        month: 'Aug',
        type: 'Series A',
        value: 2,
      },
      {
        month: 'Aug',
        type: 'Series B',
        value: 13,
      },
      {
        month: 'Aug',
        type: 'Series C',
        value: 10,
      },
      {
        month: 'Sep',
        type: 'Series A',
        value: 1,
      },
      {
        month: 'Sep',
        type: 'Series B',
        value: 3,
      },
      {
        month: 'Sep',
        type: 'Series C',
        value: 14,
      },
      {
        month: 'Oct',
        type: 'Series A',
        value: 4,
      },
      {
        month: 'Oct',
        type: 'Series B',
        value: 5,
      },
      {
        month: 'Oct',
        type: 'Series C',
        value: 4,
      },
      {
        month: 'Nov',
        type: 'Series A',
        value: 11,
      },
      {
        month: 'Nov',
        type: 'Series B',
        value: 4,
      },
      {
        month: 'Nov',
        type: 'Series C',
        value: 6,
      },
      {
        month: 'Dec',
        type: 'Series A',
        value: 6,
      },
      {
        month: 'Dec',
        type: 'Series B',
        value: 13,
      },
      {
        month: 'Dec',
        type: 'Series C',
        value: 9,
      },
    ],
  }

  @action setInfo = (userInfo: IUser): void => {
    this.user = userInfo
  }

  @action unSetInfo = (): void => {
    this.user = {
      id: 0,
      name: '',
      role: '',
      position: '',
      projects: 0,
      revenue: 0,
      messages: 0,
      earnings: 0,
      dif: 0,
      seriesA: 0,
      imgSrc: '',
      emailData: [{ month: '', type: undefined, value: 0 }],
      company: { name: '' },
    }
  }

  @computed get info(): any {
    return {
      name: this.user.name,
    }
  }
}

export default new UserStore()
