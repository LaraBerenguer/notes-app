"use client"
import { Note } from "@/types/types";

type NoteCardProps = {
    note: Note;
    onClick: () => void;
}

const NoteCard = ({ note, onClick }: NoteCardProps) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg bg-transparent cursor-pointer transition hover:shadow" onClick={onClick}>
            <section id="title" className="text-lg font-semibold mb-1">{note.title}</section>
            <section id="content" className="text-sm text-gray-700">{note.content}</section>
            <section id="important" className="text-xs font-bold text-red-500">{note.important ? " (important)" : ""}</section>
        </div>
    )
};

export default NoteCard;