import { ActionCreatorsMapObject } from 'redux';
import { IKind, IItem } from './SelectableItemsInterFace';

export interface IHeaderProps {
  selectedViewType: string;
  actions: ActionCreatorsMapObject;
}

export interface IViewUserSettingProps {
  userName: string;
  selectKinds: IKind[];
  actions: ActionCreatorsMapObject;
}

export interface IViewOrderProps {
  selectKinds: IKind[];
  items: IItem[];
  actions: ActionCreatorsMapObject;
  amount: number;
  price: number;
  sumPrice: number;
}
