export type Note = {
    id?: number;
    important: boolean;
    title: string;
    content: string;
};

export type NotesState = {
    value: Note[];
};

export type Filter = "all" | "important" | "not_important";

export type FiltersState = {
    value: Filter;
};

