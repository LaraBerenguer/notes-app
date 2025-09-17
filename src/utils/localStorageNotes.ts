import { EditGuestNoteResult, EditNote, NoteForRedux } from "../types/types";

export const saveGuestNote = (note: NoteForRedux) => {
    try {
        const currentNotes = getGuestNotes();
        const updatedNotes = [...currentNotes, note];
        localStorage.setItem("localStorageNotes", JSON.stringify(updatedNotes));
    } catch (error) {
        console.error("Something went wrong, sorry", error);
    }
};

export const getGuestNotes = () => {
    try {
        const guestNotes = localStorage.getItem("localStorageNotes");
        if (!guestNotes) return [];
        const parsed = JSON.parse(guestNotes);
        return Array.isArray(parsed) ? parsed as NoteForRedux[] : [parsed] as NoteForRedux[]; //it always returns array for redux parsing
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error loading notes, try again", error.message);
        } else {
            console.error("Error loading notes, try again", error);
        }
        return [];
    }
};

export const editGuestNotes = ({ id, title, content }: EditNote): EditGuestNoteResult => {
    try {
        const notes = getGuestNotes();
        const index = notes.findIndex(note => note.id === id);
        if (index === -1) return { success: false, message: "We can't find your note!" };

        const updatedNote: NoteForRedux = notes[index] = {
            ...notes[index],
            id: id,
            title: title ?? notes[index].title,
            content: content ?? notes[index].content,
        };

        const updatedNotes = [...notes];
        updatedNotes[index] = updatedNote;

        localStorage.setItem("localStorageNotes", JSON.stringify(updatedNotes));

        return { success: true, note: updatedNote };
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error editing note, try again", error.message);
        } else {
            console.error("Error editing note, try again", error);
        }
        return { success: false, message: "Error editing note, please try again" };
    }
};

export const deleteGuestNotes = (id: Number) => {
    try {
        const notes = getGuestNotes();
        const updatedNotes = notes.filter(note => note.id !== id);

        if (updatedNotes.length === notes.length) {
            return { success: false, message: "We can't find your note!" };
        }

        localStorage.setItem("localStorageNotes", JSON.stringify(updatedNotes));
        return { success: true, status: 200, message: "Note deleted!" };
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error deleting note, try again", error.message);
        } else {
            console.error("Error deleting note, try again", error);
        }
        return { success: false, message: "Error deleting note, please try again" };
    }
};