import {ActionType} from '../constants/ActionTypes'
import {IAction} from '../interfaces/ActionInterface'

export const onIncrementClick = (n: number): IAction => {
  return {
    data: {
      n
    },
    type: ActionType.INCREMENT
  }
}

export const onDecreaseClick = (n: number): IAction => {
  return {
    data: {
      n
    },
    type: ActionType.DECREASE
  }
}