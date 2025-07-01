import { Note } from "@/types/types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from "@/data/mockNotes";

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        notes_created: (state, action: PayloadAction<Note>) => {
            state.value.push(action.payload)
        },
        notes_toggle_importance: (state, action: PayloadAction<Number>) => {
            //const { id } = action.payload;
            const note = state.value.find(note => note.id === action.payload);
            if (note) { note.important = !note.important }
        }
    },
});

export const { notes_created, notes_toggle_importance } = noteSlice.actions;
export default noteSlice.reducer;