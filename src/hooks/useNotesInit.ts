"use client"
import { notes_init } from "@/reducers/noteReducer";
import { Note, NoteForRedux } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGuestNotes } from "@/utils/localStorageNotes";
import { useSession } from "next-auth/react";
import { parseLocalNotes, parseNotesFromDb } from "@/utils/parseNotes";

const useNotesInit = (notes: Note[]) => {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    useEffect(() => {
        let notesForRedux: NoteForRedux[] = [];
        if (!session) {
            //without user session from localStorage
            const localNotes = getGuestNotes();
            notesForRedux = parseLocalNotes(localNotes);
        } else {
            //with user session from db
            notesForRedux = parseNotesFromDb(notes);
        };
        dispatch(notes_init(notesForRedux));
    }, [dispatch, notes, session]);
};

export default useNotesInit;