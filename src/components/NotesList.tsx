"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Filter, Note } from "@/types/types";
import { notes_toggle_importance } from "@/reducers/noteReducer";
import NoteCard from "./NoteCard";
import useDeleteNote from "@/hooks/useDeleteNote";
import useEditNote from "@/hooks/useEditNote";

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

    const deleteCurrentNote = useDeleteNote()
    const editCurrentNote = useEditNote()

    const handleDelete = (id: number) => {
        deleteCurrentNote(id)
    }
    const handleEdit = (id: number, {title, content}: Partial<Note>) => {
        editCurrentNote(id, {title, content})
    }

    const filteredNotes = getFilteredNotes(notes, filter);

    return (
        <section className="notes-list flex flex-col gap-2">
            {
                filteredNotes.map(note =>
                    (<NoteCard key={note.id} note={note} onClick={() => handleImportance(note.id)} onDelete={handleDelete} onEdit={handleEdit} />))
            }
        </section>
    );
};

export default NotesList;