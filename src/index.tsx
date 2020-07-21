import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './pages/game';
import Home from './pages/home';
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import reducer from './reducers';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { Store } from './store';

const reduxWebsocketMiddleware = reduxWebsocket({ reconnectOnClose: true });
const store = createStore(reducer, applyMiddleware(reduxWebsocketMiddleware));

function App() {
  const [config, setConfig] = useState<Config>();
  useEffect(() => { fetch("config.json").then(data => data.json()).then(setConfig) }, []);
  const name = useSelector<Store, string | undefined>(store => store.player.name)

  if (name) return <Game apiUrl={config!.apiUrl} />
  else return <Home />
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

interface Config {
  apiUrl: string;
}