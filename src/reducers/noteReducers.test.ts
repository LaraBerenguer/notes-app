import noteReducer, { notes_toggle_importance } from "./noteReducer";

describe("noteReducer", () => {
    test("returns new state after toggling importance", () => {
        const state = {
            value: [
                {
                    id: 1,
                    important: false,
                    title: "Title 1",
                    content: "Note test"
                },
                {
                    id: 2,
                    important: true,
                    title: "Title 1",
                    content: "Note test 2"
                },
            ]
        };

        const action = notes_toggle_importance(1);
        const newState = noteReducer(state, action);

        expect(newState.value).toHaveLength(2);
        expect(newState.value[0].important).toBe(true);
        expect(newState.value[1].important).toBe(true);
        expect(state.value[0].important).toBe(false);
    });
});