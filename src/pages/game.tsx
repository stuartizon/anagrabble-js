import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import GameBoard from '../components/GameBoard';
import GuessWord from '../components/GuessWord';
import { Store } from '../store';
import { useParams } from 'react-router-dom';
import { useConfig } from '../hooks/config';

export default function () {
  const params = useParams<RouteParams>();
  const config = useConfig();
  const player = useSelector<Store, string>(store => store.player.name)
  const dispatch = useDispatch();

  useEffect(() => {
    const baseUrl = config.apiUrl.replace("http", "ws");
    dispatch(connect(`${baseUrl}/connect/${params.gameId}?player=${player}`))
  });

  return (
    <>
      <GameBoard />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
      <GuessWord />
    </>
  )
}

interface RouteParams {
  gameId: string;
}