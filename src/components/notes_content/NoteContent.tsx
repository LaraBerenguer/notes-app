import { NoteForRedux } from "@/types/types";

type NoteContentProps = {
    note: NoteForRedux;
};

const NoteContent = ({ note }: NoteContentProps) => {
    return (
        <>
            <section id="title" className="text-lg font-medium mb-1">{note.title}</section>
            <section id="content" className="text-sm whitespace-pre-line">{note.content}</section>
        </>
    )
};

export default NoteContent;