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

    const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nextFocused = e.relatedTarget as HTMLElement | null;        
        if (!nextFocused || !e.currentTarget.contains(nextFocused)) {
            handleSubmit(e);
        }
    }

    return (
        <form className="flex flex-col gap-2 border-2 border-gray-100 p-4 rounded-lg bg-transparent" onSubmit={handleSubmit} onBlur={handleBlur}>
            <label className="create-note-inputs flex flex-col gap-2">
                <input name="noteTitle" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} placeholder="Title"></input>
                <input name="noteContent" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} placeholder="Hello one and all..."></input>
            </label>
            {/*close button*/}
        </form>
    );
};

export default CreateNoteForm;