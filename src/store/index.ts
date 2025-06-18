import { Note } from "@/types/types";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "@/reducers/noteReducer";

export const store = configureStore({
    reducer: noteReducer
});

store.dispatch({
    type: "notes_created",
    payload: {
        id: 1,
        important: true,
        content: "To tell a great story."
    }
})

store.dispatch({
    type: "notes_created",
    payload: {
        id: 2,
        important: false,
        content: "Learning Redux."
    }
})