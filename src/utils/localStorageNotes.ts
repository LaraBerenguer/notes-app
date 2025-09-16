import { NewNote } from "../types/types";

export const saveGuestNote = (note: NewNote) => {
    try {
        localStorage.setItem("localStorageNotes", JSON.stringify(note));
    } catch (error) {
        console.error("Something went wrong, sorry", error);
    }
};

export const getGuestNotes = () => {
    try {
        const guestNotes = localStorage.getItem("localStorageNotes");
        if (!guestNotes) return [];
        const parsed = JSON.parse(guestNotes);
        return Array.isArray(parsed) ? parsed as NewNote[] : [parsed] as NewNote[]; //it always returns array for redux parsing
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error loading notes, try again", error.message);
        } else {
            console.error("Error loading notes, try again", error);
        }
        return [];
    }
};