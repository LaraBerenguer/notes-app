import { noteReducer } from "./noteReducer";

describe("noteReducer", () => {
    test("returns new state after toggling importance", () => {
        const state = [{
            id: 1,
            important: false,
            content: "Note test"
        },
        {
            id: 2,
            important: true,
            content: "Note test 2"
        },
        ];

        const action = {
            type: "notes_toggle_importance",
            payload: {
                id: 1,
                important: false,
                content: "Note test"
            }
        };
        const newState = noteReducer(state, action);
        expect(newState).toHaveLength(2);
        expect(state[0].important).toBe(false);
        expect(newState[0].important).toBe(true);
        expect(newState[1].important).toBe(true);
    });
});