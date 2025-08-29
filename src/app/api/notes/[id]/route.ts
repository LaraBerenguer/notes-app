import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Note } from "@/types/types";

//local path
const dbPath = path.join(process.cwd(), "src", "data", "db.json");

//read temporal db aka local json file
const readDB = async () => {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
}

//write on temporal db
const writeDB = async (data: Note[]) => {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
    const { params } = context;
    const db = await readDB();
    const index = db.notes.findIndex((note: Note) => note.id === Number(params.id));
    if (index === -1) return NextResponse.json({ error: "Note not found" }, { status: 404 });

    const updatedNote = await request.json();
    db.notes[index] = { ...db.notes[index], ...updatedNote };
    await writeDB(db);

    return NextResponse.json(db.notes[index]);
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    const { params } = await context;
    const db = await readDB();
    const index = db.notes.findIndex((note: Note) => note.id === Number(params.id));
    if (index === -1) return NextResponse.json({ error: "Note not found" }, { status: 404 });

    const deleted = db.notes.splice(index, 1);
    await writeDB(db);

    return NextResponse.json(deleted[0]);
}