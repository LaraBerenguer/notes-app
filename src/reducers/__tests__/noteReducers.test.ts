import noteReducer, { notes_created, notes_deleted, notes_toggle_importance } from "../noteReducer";

describe("noteReducer", () => {
    test("returns new state after toggling importance", () => {
        const state = {
            value: [
                {
                    id: 1,
                    important: false,
                    title: "Title 1",
                    content: "Note test",
                    color: "default"
                },
                {
                    id: 2,
                    important: true,
                    title: "Title 1",
                    content: "Note test 2",
                    color: "default"
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

    test("creates a new note", () => {
        const state = {
            value: []
        };

        const newNote = {
            id: 3,
            important: false,
            title: "New Note",
            content: "Content",
            color: "default"
        };

        const action = notes_created(newNote);
        const newState = noteReducer(state, action);

        expect(newState.value).toHaveLength(1);
        expect(newState.value[0]).toEqual(newNote);
    });

    test("deletes a note by id", () => {
        const state = {
            value: [
                {
                    id: 1,
                    important: false,
                    title: "Title 1",
                    content: "Note test",
                    color: "default"
                },
                {
                    id: 2,
                    important: true,
                    title: "Title 2",
                    content: "Note test 2",
                    color: "default"
                }
            ]
        };

        const action = notes_deleted(1);
        const newState = noteReducer(state, action);

        expect(newState.value).toHaveLength(1);
        expect(newState.value[0].id).toBe(2);
    });
});