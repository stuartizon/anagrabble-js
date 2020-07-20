import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import GameBoard from '../components/GameBoard';
import GuessWord from '../components/GuessWord';

function Game() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connect('ws://localhost:8080/connect?playerId=Bobby'))
  });

  return (
    <div id="app">

      <GameBoard />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
      <GuessWord />
    </div>
  );
}

export default Game;
