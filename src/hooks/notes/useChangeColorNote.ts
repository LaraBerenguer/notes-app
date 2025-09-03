"use client"
import { notes_change_color } from "@/reducers/noteReducer";
import { changeNoteColor } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

const useChangeColorNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const editNoteColor = async (id: number, color: string) => {
        try {
            const editedColorNote = await changeNoteColor(id, color);
            if (editedColorNote) {
                dispatch(notes_change_color({id, color}));
                return { success: true, message: "Note color edited successfully" }
            } else {
                return { success: false, message: `Error editing Note color` }
            }
        } catch (error) {
            return { success: false, message: `Something went wrong (on our end)` }
        }
    };
    return editNoteColor;
};

export default useChangeColorNote;