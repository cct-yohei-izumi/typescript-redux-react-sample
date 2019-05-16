import {IAction} from '../interfaces/ActionInterface'
import {IState} from '../interfaces/StateInterface'

export const defaultState = {
    count: 1
}

export const  counterReducer = (state: IState = defaultState, action: IAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.data.n
        };
      case 'DECREASE':
        return {
          count: state.count - action.data.n
        }

      default:
        return state;
    }
  };
