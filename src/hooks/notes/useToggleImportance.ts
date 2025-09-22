"use client"
import { notes_toggle_importance } from "@/reducers/noteReducer";
import { toggleImportance } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

const useToggleImportantNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const toggleImportant = async (id: number, important: boolean) => {
        try {
            const editedImportanceNote = await toggleImportance(id, important);
            if (editedImportanceNote) {
                dispatch(notes_toggle_importance(id));
                return { success: true, message: "Importance toggled successfully" }
            } else {
                return { success: false, message: `Error toggling importance` }
            }
        } catch (error) {
            return { success: false, message: `Something went wrong (on our end)` }
        }
    };
    return toggleImportant;
};

export default useToggleImportantNote;