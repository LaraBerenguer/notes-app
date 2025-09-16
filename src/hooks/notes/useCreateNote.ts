"use client"
import { notes_created } from "@/reducers/noteReducer";
import { createNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { NewNote, Note } from "@/types/types";
import { parseNoteFromDb } from "@/utils/parseNotes";
import { useDispatch } from "react-redux";

const useCreateNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const addNewNote = async (note: NewNote) => {
        const noteCreated = await createNote(note);
        const reduxNote = parseNoteFromDb(noteCreated)
        dispatch(notes_created(reduxNote));
    };
    return addNewNote;
};

export default useCreateNote;
