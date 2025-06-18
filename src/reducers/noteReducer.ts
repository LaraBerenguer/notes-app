import { Note } from "@/types/types";

export const noteReducer = (state: Note[] = [], action: { type: string; payload: Note; }) => {
    if (action.type === "notes_created") {
        return state.concat(action.payload);
    }
    return state
};