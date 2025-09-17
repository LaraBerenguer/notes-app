import { NewNote, Note, NoteForRedux } from "@/types/types";

export const parseLocalNotes = (localNotes: NewNote[]): NoteForRedux[] => {
    const parsedNotes = localNotes.map(note => ({
        id: new Date().getTime(),
        title: note.title,
        content: note.content,
        important: note.important ?? false,
        color: note.color ?? "default",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: null,
    }));
    return parsedNotes;
};

export const parseLocalNote = (localNote: NewNote): NoteForRedux => {
    const parsedNote = {
        id: new Date().getTime(),
        title: localNote.title,
        content: localNote.content,
        important: localNote.important ?? false,
        color: localNote.color ?? "default",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: null,
    };
    return parsedNote;
};

export const parseNotesFromDb = (notes: Note[]): NoteForRedux[] => {
    const parsedNotes = notes.map(note => ({
        ...note,
        createdAt: typeof note.createdAt === "string" ? note.createdAt : note.createdAt.toISOString(),
        updatedAt: typeof note.updatedAt === "string" ? note.updatedAt : note.updatedAt.toISOString(),
    }));
    return parsedNotes;
};

export const parseNoteFromDb = (note: Note): NoteForRedux => {
    const parsedNote = {
        ...note,
        createdAt: typeof note.createdAt === "string" ? note.createdAt : note.createdAt.toISOString(),
        updatedAt: typeof note.updatedAt === "string" ? note.updatedAt : note.updatedAt.toISOString(),
    };
    return parsedNote;
};