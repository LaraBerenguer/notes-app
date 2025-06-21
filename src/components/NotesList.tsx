"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Note } from "@/types/types";

const NotesList = () => {
    const notes: Note[] = useSelector((state: RootState) => state.notes.value);

    return (
        <section>
            {
                notes.map(note => {
                    return <li key={note.id}>
                        {note.content}
                        <b>{note.important ? " (important)" : ""}</b>
                    </li>
                })
            }
        </section>
    );
};

export default NotesList;