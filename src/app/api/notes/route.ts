import { NextResponse } from "next/server";
import { NewNote, Note } from "@/types/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const notes = await prisma.note.findMany({});
    return NextResponse.json(notes);
};

export async function POST(request: Request) {
    const newNote = await request.json();
    const noteCreated = await prisma.note.create({ data:newNote });
    return NextResponse.json(noteCreated, { status: 201 });
};