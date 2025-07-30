"use client"
import { notes_created } from "@/reducers/noteReducer";
import { createNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { NewNote, Note } from "@/types/types";
import { useDispatch } from "react-redux";

const useCreateNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const addNewNote =  async (note: NewNote) => {
        const noteCreated = await createNote(note);
        dispatch(notes_created(noteCreated));
    };
    return addNewNote;
};

export default useCreateNote;
