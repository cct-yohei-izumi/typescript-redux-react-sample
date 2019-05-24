import { Action } from 'redux';
import * as ActionType from '../constants/ActionTypes';
import { IKind } from './SelectableItemsInterFace';

export interface IViewAction extends Action {
  type: ActionType.ViewType;
  data: {
    viewType: string;
  };
}

export interface IOrderAction extends Action {
  type: ActionType.ViewType;
  data: {
    amount: number;
    price: number;
  };
}

export interface ISettingAction extends Action {
  type: ActionType.ViewType;
  data: {
    userName: string;
    kind: IKind[];
  };
}
