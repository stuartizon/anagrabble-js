import React from 'react';
import { useSelector } from 'react-redux';
import { GameStore, Word } from '../store';
import Tile from './Tile';
import WordDisplay from './Word';
import "./GameBoard.css";

export default function GameBoard() {
    const letters = useSelector<GameStore, string[]>(store => store.letters);
    const words = useSelector<GameStore, Word[]>(store => store.words)

    return (
        <div className="gameBoard">
            <div className="words">
                {words.map((word, index) => <WordDisplay key={index} value={word.value} />)}
            </div>
            {letters.map((letter, index) => <Tile key={index} letter={letter} />)}
        </div>
    );
}
