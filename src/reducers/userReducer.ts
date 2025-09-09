import { UserState } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = {
    value: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        user_set: (state, action: PayloadAction<UserState['value']>) => {
            state.value = action.payload;
        },
        user_cleared: (state) => {
            state.value = null;
        },
    },
});

export const { user_set, user_cleared } = userSlice.actions;
export default userSlice.reducer;