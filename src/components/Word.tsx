import * as React from 'react';
import './Word.css';
import { Word } from '../store/game';

export default function (props: WordProps) {
    return (
        <span className={`word player${props.word.playerId}`}>{props.word.value}</span>
    );
}

interface WordProps {
    word: Word
}