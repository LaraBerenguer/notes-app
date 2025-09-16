"use client"
import { notes_init } from "@/reducers/noteReducer";
import { NewNote, Note, NoteForRedux } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGuestNotes } from "@/utils/localStorageNotes";
import { useSession } from "next-auth/react";

const useNotesInit = (notes: Note[]) => {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    useEffect(() => {
        let notesForRedux: NoteForRedux[] = [];
        if (!session) {
            //without user session from localStorage
            const localNotes = getGuestNotes();
            notesForRedux = localNotes.map(note => ({
                id: new Date().getTime(),
                title: note.title,
                content: note.content,
                important: note.important ?? false,
                color: note.color ?? "default",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                userId: null,
            }));
        } else {
            //with user session from db
            notesForRedux = notes.map(note => ({
                ...note,
                createdAt: typeof note.createdAt === "string" ? note.createdAt : note.createdAt.toISOString(),
                updatedAt: typeof note.updatedAt === "string" ? note.updatedAt : note.updatedAt.toISOString(),
            }));
        };
        dispatch(notes_init(notesForRedux));
    }, [dispatch, notes, session]);
};

export default useNotesInit;