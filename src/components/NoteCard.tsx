"use client"
import { Note } from "@/types/types";
import ImportantIcon from "./ImportantIcon";
import { Trash } from "lucide-react";

type NoteCardProps = {
    note: Note;
    onClick: () => void;
    onDelete: (id: number) => void;
}

const NoteCard = ({ note, onClick, onDelete }: NoteCardProps) => {    
    return (
        <div className="note-card flex items-center border-2 border-gray-100 p-4 rounded-lg bg-transparent" onClick={onClick}>
            <section>
                <section id="title" className="text-lg font-semibold mb-1">{note.title}</section>
                <section id="content" className="text-sm text-gray-700">{note.content}</section>
            </section>
            <section id="important" className="text-xs font-bold text-red-500 ml-auto">{note.important && <ImportantIcon className="inline-block text-red-500 ml-2" />}</section>
            <section id="delete-note"><Trash strokeWidth={1} size={18} onClick={(e) => { e.stopPropagation(); onDelete(note.id) }} /></section>
        </div>
    )
};

export default NoteCard;