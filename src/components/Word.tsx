import * as React from 'react';
import './Word.css';

export default function Word(props: WordProps) {
    return (
        <span className="word">{props.value}</span>
    );
}

interface WordProps {
    value: string;
}