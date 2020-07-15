import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers';
import reduxWebsocket from '@giantmachines/redux-websocket';

const reduxWebsocketMiddleware = reduxWebsocket({ reconnectOnClose: true });
const store = createStore(reducer, applyMiddleware(reduxWebsocketMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
