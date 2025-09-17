"use client"
import { notes_edited } from "@/reducers/noteReducer";
import { editNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { EditNote } from "@/types/types";
import { editGuestNotes } from "@/utils/localStorageNotes";
import { parseNoteFromDb } from "@/utils/parseNotes";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

const useEditNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: session } = useSession();
    const editExistingNote = async ({ id, title, content }: EditNote) => {
        if (!session) {            
            const isEdited = editGuestNotes({ id, title, content });
            if (!isEdited.success) {
                console.error(isEdited.message);
                return { success: false, message: isEdited.message }
            } else {
                dispatch(notes_edited(isEdited.note));
                return { success: true, message: "Note edited!" }
            };
        } else {
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
    };
    return editExistingNote;
};

export default useEditNote;