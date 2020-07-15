import React from 'react';
import { useSelector } from 'react-redux';
import { GameStore } from '../store';
import Tile from './Tile';

export default function TileRack() {
    const letters = useSelector<GameStore, string[]>(store => store.letters);

    return (
        <div className="tileRack">
            {letters.map((letter, index) => <Tile key={index} letter={letter}/>)}
        </div>
    );
}
