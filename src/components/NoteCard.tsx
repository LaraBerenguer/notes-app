"use client"
import { Note } from "@/types/types";

type NoteCardProps = {
    note: Note;
    onClick: () => void;
}

const NoteCard = ({ note, onClick }: NoteCardProps) => {
    return (
        <div style={{ border: "2px solid black", margin: "2px" }} onClick={onClick}>
            <section id="title"><strong>{note.title}</strong></section>
            <section id="content">{note.content}</section>
            <section id="important"><b>{note.important ? " (important)" : ""}</b></section>
        </div>
    )
};

export default NoteCard;