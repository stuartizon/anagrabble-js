import React, { useState, FormEvent, ChangeEvent } from 'react';
import { guessWord } from '../actions';
import { useDispatch } from 'react-redux';
import './GuessWord.css';

export default function GuessWord() {
    const [guess, setGuess] = useState("");
    const dispatch = useDispatch();

    const update = (event: ChangeEvent<HTMLInputElement>) => setGuess(event.target.value);
    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(guessWord(guess));
        setGuess("");
    };

    return (
        <form onSubmit={submit} className="guessWord">
            <input value={guess} onChange={update} type="text" placeholder="Enter your guess" />
            <button type="submit">Go</button>
        </form>
    );
}
