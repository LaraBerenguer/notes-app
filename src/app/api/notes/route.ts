import { NextResponse } from "next/server";
import { NewNote, Note } from "@/types/types";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@auth";

const prisma = new PrismaClient();

//to do localStorage permanencia
/*export async function GET(request: Request) {
    const notes: Note[] = await prisma.note.findMany({});
    return NextResponse.json(notes);
};

export async function POST(request: Request) {
    const newNote: NewNote = await request.json();
    //temporal while implementing users and auth
    const { userId, ...noteData } = newNote;
    const noteCreated: Note = await prisma.note.create({ data: userId === undefined ? noteData : newNote });
    return NextResponse.json(noteCreated, { status: 201 });
};*/

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const notes: Note[] = await prisma.note.findMany({
        where: {
            userId: session.user.id,
        },
    });
    return NextResponse.json(notes);
};

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const newNote: NewNote = await request.json();
    const noteCreated: Note = await prisma.note.create({
        data: { ...newNote, userId: session.user.id }
    });
    return NextResponse.json(noteCreated, { status: 201 });
};