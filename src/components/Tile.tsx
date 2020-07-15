import * as React from 'react';
import './Tile.css';

export default function Tile(props: TileProps) {
    return (
        <span className="tile">{props.letter}</span>
    );
}

interface TileProps {
    letter: string;
}