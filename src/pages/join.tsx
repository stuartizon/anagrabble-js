import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { join } from "../actions";

export default function () {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const update = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(join(name));
    };

    return (
        <>
            <form onSubmit={submit}>
                <div>Enter name to begin:</div>
                <input type="text" placeholder="Name" onChange={update} />
                <button type="submit">Join</button>
            </form>
        </>
    );
}