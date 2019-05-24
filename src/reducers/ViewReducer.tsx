import { ViewType } from '../constants/ActionTypes';
import { defaultKinds, DefaultItems } from '../constants/SelectableItems';
import { ISettingAction, IViewAction, IOrderAction } from '../interfaces/ActionInterface';
import { IViewOrderState, IUserSettingState, IHeaderState } from '../interfaces/StateInterface';

export const defaultViewState = {
  selectedViewType: ViewType.USER_VIEW,
  selectKinds: defaultKinds,
  userName: 'hogehoge',
  items: DefaultItems,
  amount: 0,
  price: 0,
  sumPrice: 0,
};

export const headerReducer = (state: IHeaderState = defaultViewState, action: IViewAction) => {
  switch (action.type) {
    case ViewType.VIEWCHANGE:
      return {
        ...state,
        selectedViewType: action.data.viewType,
      };

    default:
      return state;
  }
};

export const settingReducer = (state: IUserSettingState = defaultViewState, action: ISettingAction) => {
  switch (action.type) {
    case ViewType.USER_NAME:
      return {
        ...state,
        userName: action.data.userName,
      };
    case ViewType.CHECK_BOX:
      return {
        ...state,
        checkKind: action.data.kind,
      };

    default:
      return state;
  }
};

export const OrderReducer = (state: IViewOrderState = defaultViewState, action: IOrderAction) => {
  switch (action.type) {
    case ViewType.AMOUNT:
      const amount = action.data.amount;
      return {
        ...state,
        amount: amount,
      };
    case ViewType.PRICE:
      const price = action.data.price;
      return {
        ...state,
        price: price,
      };
    case ViewType.CALC:
      const sumPrice = action.data.amount * action.data.price;
      return {
        ...state,
        sumPrice: sumPrice,
      };

    default:
      return state;
  }
};
