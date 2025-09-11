"use client"
import { notes_init } from "@/reducers/noteReducer";
import { Note, NoteForRedux } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useNotesInit = (notes: Note[]) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const serializedNotes: NoteForRedux[] = notes.map(note => ({
            ...note,
            createdAt: typeof note.createdAt === "string" ? note.createdAt : note.createdAt.toISOString(),
            updatedAt: typeof note.updatedAt === "string" ? note.updatedAt : note.updatedAt.toISOString(),
        }));
        dispatch(notes_init(serializedNotes))
    }, [dispatch, notes]);
};

export default useNotesInit;