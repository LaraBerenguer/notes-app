"use client"
import { notes_deleted } from "@/reducers/noteReducer";
import { deleteNote } from "@/services/notesService";
import { AppDispatch } from "@/store/store";
import { deleteGuestNotes } from "@/utils/localStorageNotes";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

const useDeleteNote = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: session } = useSession();
    const deleteExistingNote = async (id: Number) => {
        if (!session) {
            const isDeleted = deleteGuestNotes(id);
            if (!isDeleted.success) {
                console.error(isDeleted.message);
                return { success: false, message: isDeleted.message }
            } else {
                dispatch(notes_deleted(id));
                return { success: true, message: "Note edited!", status: isDeleted.status }
            };
        } else {
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
        }
    };
    return deleteExistingNote;
};

export default useDeleteNote;