"use client";
import { useState } from "react";
import useCreateNote from "@/hooks/useCreateNote";

const CreateNoteForm = () => {
    const [noteContent, setNoteContent] = useState<string>("");
    const [noteTitle, setNoteTitle] = useState<string>("");
    const addNewNote = useCreateNote();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!noteContent.trim()) { return }

        const newNote = {
            important: false,
            title: noteTitle,
            content: noteContent,
        };
        addNewNote(newNote);
        setNoteContent("");
        setNoteTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Note
                <input name="noteContent" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} placeholder="Hello one and all..."></input>
                <input name="noteTitle" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} placeholder="Title"></input>
            </label>
            <button id="addNoteButton">Add</button>
        </form>
    );
};

export default CreateNoteForm;