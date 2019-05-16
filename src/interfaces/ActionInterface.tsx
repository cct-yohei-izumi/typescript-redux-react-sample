import { Action } from 'redux';
import {ActionType} from '../constants/ActionTypes'


export interface IAction extends Action {
  type: ActionType;
  data: {
    n: number
  };
}
