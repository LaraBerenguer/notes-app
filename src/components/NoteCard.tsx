"use client"
import { Note } from "@/types/types";
import ImportantIcon from "./ImportantIcon";
import { Trash } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

type NoteCardProps = {
    note: Note;
    onClick: () => void;
    onDelete: (id: number) => void;
}

const NoteCard = ({ note, onClick, onDelete }: NoteCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const confirmDelete = () => {
        onDelete(note.id);
        setIsModalOpen(false);
    };

    return (
        <div className="note-card flex items-center border-2 border-gray-100 p-4 rounded-lg bg-transparent" onClick={onClick}>
            <section>
                <section id="title" className="text-lg font-semibold mb-1">{note.title}</section>
                <section id="content" className="text-sm text-gray-700">{note.content}</section>
            </section>
            <section id="important" className="text-xs font-bold text-red-500 ml-auto">{note.important && <ImportantIcon className="inline-block text-red-500 ml-2" />}</section>
            <section id="delete-note">
                <button>
                    <Trash strokeWidth={1} size={18} onClick={(e) => { e.stopPropagation(); setIsModalOpen(true) }} />
                </button>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h4 className="text-lg font-semibold mb-2">Delete note?</h4>
                <p className="text-sm text-gray-600 mb-4">
                    This can't be undone
                </p>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-3 py-1 bg-red-500 text-white rounded"
                        onClick={confirmDelete}
                    >
                        Delete
                    </button>
                </div>
            </Modal>
        </div>
    )
};

export default NoteCard;