"use client"
import { notes_edited } from "@/reducers/noteReducer";
import { editNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { Note } from "@/types/types";
import { parseNoteFromDb } from "@/utils/parseNotes";
import { useDispatch } from "react-redux";

const useEditNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const editExistingNote = async ({ id, title, content }: Partial<Note>) => {
        try {
            const editedNote = await editNote({ id, title, content });
            if (editedNote) {
                const reduxEditedNote = parseNoteFromDb(editedNote)
                dispatch(notes_edited(reduxEditedNote));
                return { success: true, message: "Note edited successfully" }
            } else {
                return { success: false, message: `Error editing Note` }
            }
        } catch (error) {
            return { success: false, message: `Something went wrong (on our end)` }
        }
    };
    return editExistingNote;
};

export default useEditNote;