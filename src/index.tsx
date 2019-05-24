import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HeaderContainer from './containers/HeaderContainer';
import ViewContainer from './containers/ViewContainer';
import rootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <HeaderContainer />
    <ViewContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
