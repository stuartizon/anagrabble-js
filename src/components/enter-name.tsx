import React, { ChangeEvent } from "react";

export default function ({ onChange }: Props) {
    const update = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

    return (<input type="text" required placeholder="Enter your name" onChange={update} />);
}

interface Props {
    onChange(name: string): void;
}
