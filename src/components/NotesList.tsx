"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Filter, Note } from "@/types/types";
import { notes_toggle_importance } from "@/reducers/noteReducer";

const NotesList = () => {
    const notes: Note[] = useSelector((state: RootState) => state.notes.value);
    const filter: Filter = useSelector((state: RootState) => state.filter.value);
    const dispatch = useDispatch();

    const getFilteredNotes = (notes: Note[], filter: Filter) => {
        if (filter === "important") return notes.filter(note => note.important === true);
        if (filter === "not_important") return notes.filter(note => note.important === false);
        return notes;
    };

    const handleImportance = (id: number) => {
        dispatch(notes_toggle_importance(id))
    };

    const filteredNotes = getFilteredNotes(notes, filter);

    return (
        <section>
            {
                filteredNotes.map(note =>
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