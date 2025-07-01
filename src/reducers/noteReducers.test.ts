import noteReducer from "./noteReducer";

describe("noteReducer", () => {
    test("returns new state after toggling importance", () => {
        const state = {
            value: [
                {
                    id: 1,
                    important: false,
                    content: "Note test"
                },
                {
                    id: 2,
                    important: true,
                    content: "Note test 2"
                },
            ]
        };

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
        expect(state.value[0].important).toBe(false);
        expect(newState.value[0].important).toBe(true);
        expect(newState.value[1].important).toBe(true);
    });
});