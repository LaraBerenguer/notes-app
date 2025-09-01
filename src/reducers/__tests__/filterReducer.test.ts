import { Filter } from "@/types/types";
import filterReducer, { filter_important, filter_all } from "../filterReducer";

describe("filterReducer", () => {
    test("filters important notes after clicking important filter button", () => {
        const state = {
            value: "all" as Filter
        };

        const action = filter_important();
        const newState = filterReducer(state, action);

        expect(newState.value).toBe("important");
        expect(state.value).toBe("all");
    });

    test("shows all notes after clicking all filter button", () => {
        const state = {
            value: "important" as Filter
        };

        const action = filter_all();
        const newState = filterReducer(state, action);

        expect(newState.value).toBe("all");
        expect(state.value).toBe("important");
    });
});