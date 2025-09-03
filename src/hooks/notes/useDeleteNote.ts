"use client"
import { notes_deleted } from "@/reducers/noteReducer";
import { deleteNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

const useDeleteNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const deleteExistingNote = async (id: Number) => {
        try {
            const status = await deleteNote(id);
            if (status === 200 || status === 204) {
                dispatch(notes_deleted(id));
                return { success: true, message: "Note deleted successfully" }
            } else {
                return { success: false, message: `Error deleting Note. Status code: ${status}` }
            }
        } catch (error) {
            return { success: false, message: `Something went wrong (on our end)` }
        }
    };
    return deleteExistingNote;
};

export default useDeleteNote;