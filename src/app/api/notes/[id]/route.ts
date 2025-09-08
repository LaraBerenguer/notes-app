import { NextResponse } from "next/server";
import { Note } from "@/types/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(request: Request, context: { params: { id: string } }) {
    const { id: idParam } = await context.params;
    const { title, content } = await request.json();

    const editedNote: Note = await prisma.note.update({
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

    const deletedNote: Note = await prisma.note.delete({
        where: {
            id: Number(idParam),
        },
    })

    if (!deletedNote) return NextResponse.json({ error: "Note not found" }, { status: 404 });
    return NextResponse.json(deletedNote);
}