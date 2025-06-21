"use client";
import { notes_created } from "@/reducers/noteReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

const CreateNoteForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValue] = useState<string>("")

    const newId = () => {
        return Math.floor(Math.random() * 99999);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) { return }

        dispatch(notes_created({
            id: newId(),
            important: false,
            content: value,
        }))
        setValue("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Note
                <input name="note" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Hello one and all..."></input>
            </label>
            <button id="addNoteButton">Add</button>
        </form>
    );
};

export default CreateNoteForm;