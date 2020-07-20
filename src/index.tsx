import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './pages/game';
import Home from './pages/home';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const reduxWebsocketMiddleware = reduxWebsocket({ reconnectOnClose: true });
const store = createStore(reducer, applyMiddleware(reduxWebsocketMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/game" component={Game}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
