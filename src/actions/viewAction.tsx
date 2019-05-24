import { ViewType } from '../constants/ActionTypes';
import { ISettingAction, IViewAction, IOrderAction } from '../interfaces/ActionInterface';
import { IKind } from '../interfaces/SelectableItemsInterFace';

export const onRadioClick = (selected: string): IViewAction => {
  return {
    data: {
      viewType: selected,
    },
    type: ViewType.VIEWCHANGE,
  };
};

export const onChangeText = (userName: string): ISettingAction => {
  return {
    data: {
      kind: [],
      userName: userName,
    },
    type: ViewType.USER_NAME,
  };
};

export const onChangeAmount = (amount: number): IOrderAction => {
  return {
    data: {
      amount: amount,
      price: 0,
    },
    type: ViewType.AMOUNT,
  };
};

export const onChangeItemPrice = (price: number): IOrderAction => {
  return {
    data: {
      price: price,
      amount: 0,
    },
    type: ViewType.PRICE,
  };
};

export const calcSumPrice = (amount: number, price: number): IOrderAction => {
  return {
    data: {
      price: price,
      amount: amount,
    },
    type: ViewType.CALC,
  };
};

export const onChangeCheckBox = (checkKind: IKind[]): ISettingAction => {
  return {
    data: {
      kind: checkKind,
      userName: '',
    },
    type: ViewType.CHECK_BOX,
  };
};
