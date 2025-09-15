"use client"
import { notes_init } from "@/reducers/noteReducer";
import { NewNote, Note, NoteForRedux } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServerSession } from "next-auth";
import { authOptions } from "@auth";
import { getGuestNotes } from "@/utils/localStorageNotes";

const useNotesInit = (notes: Note[]) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const init = async () => {
            const session = await getServerSession(authOptions);
            let notesForRedux: NoteForRedux[] = [];
            if (session?.user) {
                //with user session from db
                notesForRedux = notes.map(note => ({
                    ...note,
                    createdAt: typeof note.createdAt === "string" ? note.createdAt : note.createdAt.toISOString(),
                    updatedAt: typeof note.updatedAt === "string" ? note.updatedAt : note.updatedAt.toISOString(),
                }));
            } else {
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
            };
            dispatch(notes_init(notesForRedux));
        };

        init();
    }, [dispatch, notes]);
};

export default useNotesInit;