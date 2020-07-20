import React from 'react';

export default function () {
    return (
        <div id="home">
            <h1>Anagrabble</h1>
            <form action="game">
                <div>Enter name to begin:</div>
                <input type="text" placeholder="Name" />
                <button type="submit">Start game</button>
            </form>
        </div>
    );
}
