import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import GameBoard from '../components/GameBoard';
import GuessWord from '../components/GuessWord';
import { Store } from '../store';

function Game(props: GameProps) {
  const dispatch = useDispatch();
  const player = useSelector<Store, string>(store => store.player.name!)

  useEffect(() => {
    dispatch(connect(`${props.apiUrl}/connect?player=${player}`))
  });

  return (
    <div id="app">

      <GameBoard />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
      <GuessWord />
    </div>
  );
}

interface GameProps {
  apiUrl: string
}

export default Game;
