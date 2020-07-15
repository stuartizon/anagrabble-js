import React from 'react';
import { useSelector } from 'react-redux';
import { GameStore } from '../store';

export default function LetterBank() {
    const letters = useSelector<GameStore, string[]>(store => store.letters);

    return (
        <div id="letterBank">
            <ul>
                {letters.map((letter, index) => <li key={index}>{letter}</li>)}
            </ul>
        </div>
    );
}
