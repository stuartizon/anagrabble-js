import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import GameBoard from '../components/GameBoard';
import GuessWord from '../components/GuessWord';
import { Store } from '../store';

function Game() {
  const dispatch = useDispatch();
  const player = useSelector<Store, string>(store => store.player.name!)

  useEffect(() => {
    dispatch(connect(`wss://api.anagrabble.com/connect?playerId=${player}`))
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
