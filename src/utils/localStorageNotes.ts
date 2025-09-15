import { NewNote } from "../types/types";

export const saveGuestNotes = (notes: NewNote[]) => {
    try {
        localStorage.setItem("localStorageNotes", JSON.stringify(notes));
    } catch (error) {
        console.error("Something went wrong, sorry", error);
    }
};

export const getGuestNotes = () => {
    try {
        const guestNotes = localStorage.getItem("localStorageNotes");
        if (!guestNotes) return [];
        return JSON.parse(guestNotes);
    } catch (error) {
        return [];
    }
};