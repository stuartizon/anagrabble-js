import React from "react";
import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { join } from "../actions";
import EnterName from "../components/enter-name";

export default function () {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const submit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(join(name));
    };

    return (
        <>
            <form onSubmit={submit}>
                <EnterName onChange={setName} />
                <button type="submit">Join</button>
            </form>
        </>
    );
}