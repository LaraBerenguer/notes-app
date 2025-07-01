export type Note = {
    id: number;
    important: boolean;
    content: String;
};

export type NotesState = {
    value: Note[];
};

