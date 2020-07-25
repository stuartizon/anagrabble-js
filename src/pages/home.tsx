import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useConfig } from '../hooks/config';

export default function () {
    const config = useConfig();
    const history = useHistory();

    const click = () => axios.get(`${config.apiUrl}/create`)
        .then(response => history.push(response.data));

    return (
        <>
            <h1>Anagrabble</h1>
            Click here to create a new game:
            <button type="submit" onClick={click}>Create game</button>
        </>
    );
}
