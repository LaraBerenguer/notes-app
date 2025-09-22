"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { EditNote, Filter, Note, NoteForRedux } from "@/types/types";
import { notes_toggle_importance } from "@/reducers/noteReducer";
import NoteCard from "./NoteCard";
import useDeleteNote from "@/hooks/notes/useDeleteNote";
import useEditNote from "@/hooks/notes/useEditNote";
import useChangeColorNote from "@/hooks/notes/useChangeColorNote";
import { getFilteredNotes } from "@/utils/getFilteredNotes";
import styles from "./NotesList.module.css";
import useToggleImportantNote from "@/hooks/notes/useToggleImportance";

const NotesList = () => {
    const notes: NoteForRedux[] = useSelector((state: RootState) => state.notes.value);
    const filter: Filter = useSelector((state: RootState) => state.filter.value);
    const dispatch = useDispatch();

    const deleteCurrentNote = useDeleteNote();
    const editCurrentNote = useEditNote();
    const editNoteColor = useChangeColorNote();
    const toggleImportance = useToggleImportantNote();

    const handleDelete = (id: number) => {
        deleteCurrentNote(id)
    };
    const handleEdit = ({ id, title, content }: EditNote) => {
        editCurrentNote({ id, title, content })
    };
    const handleChangeColor = (id: number, color: string) => {
        editNoteColor(id, color)
    };
    const handleImportance = (id: number, important: boolean) => {
        toggleImportance(id, important)
    };

    const filteredNotes = getFilteredNotes(notes, filter);

    return (
        <section id="notes-list" className={styles.noteList}>
            {
                filteredNotes.map(note =>
                    (<NoteCard key={note.id} note={note} onClick={() => handleImportance(note.id, note.important)} onDelete={handleDelete} onEdit={handleEdit} onChangeColor={handleChangeColor} />))
            }
        </section>
    );
};

export default NotesList;