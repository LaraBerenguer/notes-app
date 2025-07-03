"use client";
import { useState } from "react";
import useCreateNote from "@/hooks/useCreateNote";

const CreateNoteForm = () => {
    const [value, setValue] = useState<string>("");
    const addNewNote = useCreateNote();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) { return }

        const newNote = {
            important: false,
            content: value,
        };
        addNewNote(newNote)
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