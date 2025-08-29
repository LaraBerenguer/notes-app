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

const writeDB = async (data: Note[]) => {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(request: Request) {
    const dbData = await readDB();
    return NextResponse.json(dbData.notes);
};

export async function POST(request: Request) {
    const newNote = await request.json();
    const dbData = await readDB();

    const dbNote = {
        id: Date.now(),
        ...newNote
    };

    dbData.notes.push(dbNote);
    await writeDB(dbData);

    return NextResponse.json(dbNote, { status: 201 });
};