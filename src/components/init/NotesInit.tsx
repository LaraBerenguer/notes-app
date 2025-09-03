"use client";
import { Note } from "@/types/types";
import useNotesInit from "@/hooks/useNotesInit";

interface NotesInitProps {
    notes: Note[]
};

const NotesInit = ({ notes }: NotesInitProps) => {
    useNotesInit(notes);
    return null;
};

export default NotesInit;