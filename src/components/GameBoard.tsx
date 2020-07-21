import React from 'react';
import { useSelector } from 'react-redux';
import { Word } from '../store/game';
import Tile from './Tile';
import WordDisplay from './Word';
import "./GameBoard.css";
import { Store } from '../store';

export default function GameBoard() {
    const letters = useSelector<Store, string[]>(store => store.game.letters);
    const words = useSelector<Store, Word[]>(store => store.game.words)

    return (
        <div className="gameBoard">
            <div className="words">
                {words.map((word, index) => <WordDisplay key={index} value={word.value} />)}
            </div>
            {letters.map((letter, index) => <Tile key={index} letter={letter} />)}
        </div>
    );
}
