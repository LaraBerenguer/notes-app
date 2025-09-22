"use client"
import { EditNote, Note, NoteForRedux } from "@/types/types";
import { useState } from "react";
import Modal from "../ui/Modal";
import NoteMenu from "./NoteMenu";
import { Flag, Star } from "lucide-react";
import NoteEditForm from "../notes_forms/NoteEditForm";
import NoteContent from "./NoteContent";

type NoteCardProps = {
    note: NoteForRedux;
    onClick: () => void;
    onDelete: (id: number) => void;
    onEdit: ({ id, title, content }: EditNote) => void;
    onChangeColor: (id: number, color: string) => void;
}

const NoteCard = ({ note, onClick, onDelete, onEdit, onChangeColor }: NoteCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const confirmDelete = () => {
        onDelete(note.id);
        setIsModalOpen(false);
    };

    const handleChangeColor = (selectedColor: string) => {
        return onChangeColor(note.id, selectedColor);
    };

    return (
        <div className="note-card break-inside-avoid flex flex-col mb-[5%] border-1 border-gray-100 p-4 rounded-lg w-full hover:shadow-sm dark:shadow-black transition" style={{ backgroundColor: !note.color || note.color === "default" ? "transparent" : note.color }}>
            <section id="note-card--content">
                {isEditing ? (
                    <NoteEditForm
                        note={note}
                        setIsEditing={setIsEditing}
                        onEdit={onEdit}
                    />
                ) : (
                    <NoteContent note={note}/>
                )}
            </section>
            <section id="note-card--side" className="flex items-center">
                <section id="note-card--important" className="text-xs font-bold ml-auto" onClick={onClick}>{note.important ? <Flag strokeWidth={4} size={18} color="#A52019" className="inline-block ml-2" /> : <Flag strokeWidth={2} size={18} color="#D4D4D4" className="inline-block ml-2" />}</section>
                <section id="note-card--menu" className=""><NoteMenu onDelete={() => setIsModalOpen(true)} onEdit={() => setIsEditing(true)} onChangeColor={handleChangeColor} aria-label="Opciones" /></section>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h4 className="text-black text-lg font-semibold mb-2">Delete note?</h4>
                <p className="text-sm text-gray-600 mb-4">
                    This can't be undone
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-3 py-1 bg-pink-300 text-black rounded transition cursor-pointer"
                        onClick={confirmDelete}
                        aria-label="confirm delete"
                    >
                        Delete
                    </button>
                    <button
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded transition cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="cancel delete"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    )
};

export default NoteCard;