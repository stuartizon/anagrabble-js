import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';
import { turnLetter } from '../actions';
import LetterBank from './LetterBank';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connect('ws://anagrabble-server-2085426441.ap-southeast-2.elb.amazonaws.com/connect'))
  });

  return (
    <div id="app">
      <LetterBank />
      <button onClick={() => dispatch(turnLetter)}>Turn letter</button>
    </div>
  );
}

export default App;
