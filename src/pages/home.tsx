import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useConfig } from '../hooks/config';
import EnterName from '../components/enter-name';
import { join } from '../actions';
import { useDispatch } from 'react-redux';

export default function () {
    const config = useConfig();
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const submit = (event: FormEvent) => {
        event.preventDefault();
        axios.get(`${config.apiUrl}/create`)
            .then(response => history.push(response.data))
            .then(_ => dispatch(join(name)));
    };

    return (
        <>
            <h1>Anagrabble</h1>
            <form onSubmit={submit}>
                <EnterName onChange={setName} />
                <button type="submit">Create new game</button>
            </form>
        </>
    );
}
