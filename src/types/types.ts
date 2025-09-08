import { Note as PrismaNote, User as PrismaUser } from "@prisma/client";

export type NewNote = {    
    title: string;
    content: string;
    important: boolean;
    color: string;
    userId?: number;
};

export type Note = PrismaNote;

export type EditNote = NewNote & {
    id: number
}

export type NotesState = {
    value: Note[];
}; //to do remove

export type Filter = "all" | "important" | "not_important";

export type FiltersState = {
    value: Filter;
};

