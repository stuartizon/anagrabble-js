import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import GameBoard from './GameBoard';
import GuessWord from './GuessWord';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connect('wss://api.anagrabble.com/connect?playerId=Bobby'))
  });

  return (
    <div id="app">

      <GameBoard />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
      <GuessWord />
    </div>
  );
}

export default App;
