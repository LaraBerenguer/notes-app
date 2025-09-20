import { EditNote, Note, NoteForRedux } from "@/types/types";
import { useState } from "react";

type NoteEditFormProps = {
    note: NoteForRedux,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
    onEdit: ({ id, title, content }: EditNote) => void
}

const NoteEditForm = ({ note, setIsEditing, onEdit }: NoteEditFormProps) => {
    const [editTitle, setEditTitle] = useState<string | undefined>("")
    const [editContent, setEditContent] = useState<string | undefined>("")

    const saveEdit = () => {
        const newTitle = editTitle?.trim() === "" ? note.title : editTitle;
        const newContent = editContent?.trim() === "" ? note.content : editContent;
        onEdit({ id: note.id, title: newTitle, content: newContent });
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col gap-2">
            <input
                className="text-lg font-semibold focus:border-gray-100 active:border-gray-100 border-2 border-transparent rounded"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                placeholder={note.title}
                type="text"
                aria-label="Edit note title"
            />
            <textarea
                className="text-sm text-gray-700 h-18 resize-y focus:border-gray-100 active:border-gray-100 border-2 border-transparent rounded"
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
                placeholder={note.content}
                aria-label="Edit note content"
            />
            <div className="note-card--buttons flex gap-2 mt-2">
                <button className="px-2 py-1 bg-pink-300 text-gray-800 rounded" onClick={saveEdit} aria-label="Save edit note">Save</button>
                <button className="px-2 py-1 bg-gray-200 text-gray-800 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        </div>
    )
};

export default NoteEditForm;