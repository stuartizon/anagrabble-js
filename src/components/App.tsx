import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import TileRack from './TileRack';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connect('wss://api.anagrabble.com/connect'))
  });

  return (
    <div id="app">
      <TileRack />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
    </div>
  );
}

export default App;
