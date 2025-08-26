"use client"
import { Note } from "@/types/types";
import ImportantIcon from "./ImportantIcon";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import NoteMenu from "./NoteMenu";

type NoteCardProps = {
    note: Note;
    onClick: () => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, { title, content }: Partial<Note>) => void;
}

const NoteCard = ({ note, onClick, onDelete, onEdit }: NoteCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState<string | undefined>("")
    const [editContent, setEditContent] = useState<string | undefined>("")

    const confirmDelete = () => {
        onDelete(note.id);
        setIsModalOpen(false);
    };

    const saveEdit = () => {
        const newTitle = editTitle?.trim() === "" ? note.title : editTitle;
        const newContent = editContent?.trim() === "" ? note.content : editContent;
        onEdit(note.id, { title: newTitle, content: newContent });
        setIsEditing(false);
    };

    return (
        <div className="note-card flex flex-col w-[250px] border-2 border-gray-100 p-4 rounded-lg bg-transparent" onClick={onClick}>
            <section id="note-card--content">
                {isEditing ? (
                    <div className="flex flex-col gap-2">
                        <input
                            className="text-lg font-semibold border-b"
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                            placeholder={note.title}
                        />
                        <textarea
                            className="text-sm text-gray-700 resize-none"
                            value={editContent}
                            onChange={e => setEditContent(e.target.value)}
                            placeholder={note.content}
                        />
                        <div className="note-card--buttons flex gap-2 mt-2">
                            <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={saveEdit}>Save</button>
                            <button className="px-2 py-1 bg-gray-200 text-gray-800 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>

                    </div>
                ) : (
                    <>
                        <section id="title" className="text-lg font-semibold mb-1">{note.title}</section>
                        <section id="content" className="text-sm text-gray-700 whitespace-pre-line">{note.content}</section>
                    </>
                )}
            </section>
            <section id="note-card--side" className="flex items-center">
                <section id="note-card--important" className="text-xs font-bold text-red-500 ml-auto">{note.important && <ImportantIcon className="inline-block text-red-500 ml-2" />}</section>
                <section id="note-card--menu" className=""><NoteMenu onDelete={() => setIsModalOpen(true)} onEdit={() => setIsEditing(true)} /></section>
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