import { Filter, NoteForRedux } from "@/types/types";

export const getFilteredNotes = (notes: NoteForRedux[], filter: Filter) => {
    if (filter === "important") return notes.filter(note => note.important === true);
    if (filter === "not_important") return notes.filter(note => note.important === false);
    return notes;
};