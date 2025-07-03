export type Note = {
    id?: number;
    important: boolean;
    content: String;
};

export type NotesState = {
    value: Note[];
};

export type Filter = "all" | "important" | "not_important";

export type FiltersState = {
    value: Filter;
};

