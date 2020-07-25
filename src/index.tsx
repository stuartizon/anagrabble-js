import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './pages/game';
import Home from './pages/home';
import Join from './pages/join';
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import reducer from './reducers';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from './hooks/config';
import { Store } from './store';

const reduxWebsocketMiddleware = reduxWebsocket({ reconnectOnClose: true });
const store = createStore(reducer, applyMiddleware(reduxWebsocketMiddleware));

function App() {
  const player = useSelector<Store, string>(store => store.player.name)
  return player ? <Game /> : <Join />
}

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/:gameId"><App /></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);