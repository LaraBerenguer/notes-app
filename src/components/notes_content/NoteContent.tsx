import { Note } from "@/types/types";

type NoteContentProps = {
    note: Note;
};

const NoteContent = ({ note }: NoteContentProps) => {
    return (
        <>
            <section id="title" className="text-lg font-semibold mb-1">{note.title}</section>
            <section id="content" className="text-sm whitespace-pre-line">{note.content}</section>
        </>
    )
};

export default NoteContent;