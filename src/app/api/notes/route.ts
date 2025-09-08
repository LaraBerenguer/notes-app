import { NextResponse } from "next/server";
import { NewNote, Note } from "@/types/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const notes: Note[] = await prisma.note.findMany({});
    return NextResponse.json(notes);
};

export async function POST(request: Request) {
    const newNote: NewNote = await request.json();
    //temporal while implementing users and auth
    const { userId, ...noteData } = newNote;
    const noteCreated: Note = await prisma.note.create({ data: userId === undefined ? noteData : newNote });
    return NextResponse.json(noteCreated, { status: 201 });
};