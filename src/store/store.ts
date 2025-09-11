import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "@/reducers/noteReducer";
import filterSlice from "@/reducers/filterReducer";
import userSlice from "@/reducers/userReducer";

export const store = configureStore({
    reducer: {
        notes: noteSlice,
        filter: filterSlice,
        user: userSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;