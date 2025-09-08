import { NextResponse } from "next/server";
import { Note } from "@/types/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(request: Request, context: { params: { id: string } }) {
    const {id: idParam} = await context.params;
    const { title, content } = await request.json();

    const editedNote = await prisma.note.update({
        where: {
            id: Number(idParam),
        },

        data: {
            title,
            content,
        },
    });

    return NextResponse.json(editedNote);
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    const { id: idParam } = await context.params;
    const id = Number(idParam);
    const db = await readDB();
    const index = db.notes.findIndex((note: Note) => note.id === id);
    if (index === -1) return NextResponse.json({ error: "Note not found" }, { status: 404 });

    const deleted = db.notes.splice(index, 1);
    await writeDB(db);

    return NextResponse.json(deleted[0]);
}