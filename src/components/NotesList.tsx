"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Note } from "@/types/types";
import { notes_toggle_importance } from "@/reducers/noteReducer";

const NotesList = () => {
    const notes: Note[] = useSelector((state: RootState) => state.notes.value);
    const dispatch = useDispatch();

    const handleImportance = (id: number) => {        
        dispatch(notes_toggle_importance(id))
    }

    return (
        <section>
            {
                notes.map(note =>
                (<li key={note.id} onClick={() => handleImportance(note.id)}>
                    {note.content}
                    <b>{note.important ? " (important)" : ""}</b>
                </li>
                ))
            }
        </section>
    );
};

export default NotesList;