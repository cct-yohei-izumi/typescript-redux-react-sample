import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore } from 'redux';

import Container from './containers/Container'
import rootReducer from './reducers/RootReducer'
import registerServiceWorker from './registerServiceWorker';



const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root') as HTMLElement
  );
  registerServiceWorker();