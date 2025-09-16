"use client"
import { notes_created } from "@/reducers/noteReducer";
import { createNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { NewNote, Note } from "@/types/types";
import { saveGuestNote } from "@/utils/localStorageNotes";
import { parseLocalNote, parseNoteFromDb } from "@/utils/parseNotes";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

const useCreateNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: session } = useSession();
    const addNewNote = async (note: NewNote) => {
        if (!session) {
            //without user session from localStorage
            //async?
            saveGuestNote(note);
            const reduxNote = parseLocalNote(note)
            dispatch(notes_created(reduxNote));
        } else {
            //with user session from db
            const noteCreated = await createNote(note);
            const reduxNote = parseNoteFromDb(noteCreated)
            dispatch(notes_created(reduxNote));
        };
    };
    return addNewNote;
};

export default useCreateNote;
