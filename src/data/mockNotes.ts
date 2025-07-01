import { NotesState } from "@/types/types";

export const initialState: NotesState = {
    value: [
        {
            id: 1,
            important: true,
            content: "Learn Redux"
        },
        {
            id: 2,
            important: false,
            content: "Play some Cyberpunk 2077"
        },
        {
            id: 3,
            important: true,
            content: "Create a portfolio"
        },
    ],
};