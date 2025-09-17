import { Note as PrismaNote, User as PrismaUser } from "@prisma/client";

export type NewNote = {
    title: string;
    content: string;
    important: boolean;
    color: string;
    userId?: string | null;
};

export type Note = PrismaNote;

export type EditNote = {
    id: number;
    title: string | undefined;
    content: string | undefined;
};

export type NotesState = {
    value: Note[];
}; //to do remove

export type NoteForRedux = Omit<Note, "createdAt" | "updatedAt"> & {
    createdAt: string;
    updatedAt: string;
};

export type Filter = "all" | "important" | "not_important";

export type FiltersState = {
    value: Filter;
};

export type User = {
    id?: string | number;
    name?: string | null;
    email?: string | null;
    image?: string | null;
} | null;

export type UserState = {
    value: User;
};

export type EditGuestNoteResult =
    | { success: true; note: NoteForRedux }
    | { success: false; message: string };
