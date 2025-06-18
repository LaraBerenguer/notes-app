import { Note } from "@/types/types";

export const noteReducer = (state: Note[] = [], action: { type: string; payload: Note; }) => {
    if (action.type === "notes_created") {
        return state.concat(action.payload);
    }

    if (action.type === "notes_toggle_importance") {
        const { id } = action.payload;
        return state.map(note => {
            if (note.id === id) {
                return { ...note, important: !note.important }
            }
            return note;
        });
    };

    return state;
};