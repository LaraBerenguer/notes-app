export type NewNote = {
    important: boolean;
    title: string;
    content: string;
};

export type Note = NewNote & {
    id: number
}

export type NotesState = {
    value: Note[];
};

export type Filter = "all" | "important" | "not_important";

export type FiltersState = {
    value: Filter;
};

