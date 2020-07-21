import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { join } from '../actions';

export default function () {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const update = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(join(name));
    };

    return (
        <div id="home">
            <h1>Anagrabble</h1>
            <form onSubmit={submit}>
                <div>Enter name to begin:</div>
                <input type="text" placeholder="Name" onChange={update} />
                <button type="submit">Start game</button>
            </form>
        </div>
    );
}
