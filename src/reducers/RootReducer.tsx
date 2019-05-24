import { combineReducers } from 'redux';
import { headerReducer, OrderReducer, settingReducer } from './ViewReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  order: OrderReducer,
  setting: settingReducer,
});

export default rootReducer;
