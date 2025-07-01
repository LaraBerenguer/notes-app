import { FiltersState } from "@/types/types";
import { createSlice } from '@reduxjs/toolkit';

const initialState: FiltersState = {
    value: "all"
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter_all: state => {
            state.value = "all";
        },
        filter_important: state => {
            state.value = "important";
        },
        filter_not_important: state => {
            state.value = "not_important";
        },
    },
});

export const { filter_all, filter_important, filter_not_important } = filterSlice.actions;
export default filterSlice.reducer;