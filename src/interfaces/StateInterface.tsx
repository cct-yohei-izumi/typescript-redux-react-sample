import { IKind, IItem } from './SelectableItemsInterFace';

export interface IUserSettingState {
  userName: string;
  selectKinds: IKind[];
}

export interface IHeaderState {
  selectedViewType: string;
}

export interface IViewOrderState {
  selectKinds: IKind[];
  items: IItem[];
  amount: number;
  price: number;
  sumPrice: number;
}

export interface IRootState {
  setting: IUserSettingState;
  header: IHeaderState;
  order: IViewOrderState;
}
