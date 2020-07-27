import React from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';
import WordDisplay from './Word';
import "./GameBoard.css";
import { Store } from '../store';

export default function GameBoard() {
    const letters = useSelector<Store, string[]>(store => store.game.letters);
    const words = useSelector(partitionWords);

    return (
        <div className="game-board">
            <div className="word-heading">THEIR WORDS</div>
            <div className="words">
                {words.others.map((word, index) => <WordDisplay key={index} word={word} />)}
            </div>
            <hr className="word-divider" />
            <div className="word-heading">YOUR WORDS</div>
            <div className="words">
                {words.mine.map((word, index) => <WordDisplay key={index} word={word} />)}
            </div>
            <div className="tiles">
                {letters.map((letter, index) => <Tile key={index} letter={letter} />)}
            </div>
        </div>
    );
}

function partitionWords(store: Store) {
    const playerId = store.game.players.indexOf(store.player.name!);

    return {
        mine: store.game.words.filter(word => word.playerId === playerId),
        others: store.game.words.filter(word => word.playerId !== playerId)
    };
}