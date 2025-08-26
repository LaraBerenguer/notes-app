import { MoreVertical, Pencil, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type NoteMenuProps = {
    onEdit: () => void;
    onDelete: () => void;
};

const NoteMenu = ({ onEdit, onDelete }: NoteMenuProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div ref={menuRef} className="relative flex items-center">
            <button
            aria-label="Opciones"
            onClick={e => { e.stopPropagation(); setOpen(!open); }}
            className="ml-2 flex items-center justify-center"
            >
            <MoreVertical strokeWidth={1} size={18} />
            </button>
            {open && (
                <div className="absolute left-0 top-8 z-10 bg-white border border-1 border-gray-100 rounded shadow-md text-sm flex flex-col min-w-[120px]">
                    <button
                        className="px-4 py-2 text-left flex gap-2 hover:bg-gray-100"
                        onClick={e => { e.stopPropagation(); setOpen(false); onEdit(); }}
                    >
                        <Trash strokeWidth={1} size={18} /> Edit note
                    </button>
                    <button
                        className="px-4 py-2 text-left flex gap-2 whitespace-nowrap hover:bg-gray-100 text-red-600"
                        onClick={e => { e.stopPropagation(); setOpen(false); onDelete(); }}
                    >
                        <Pencil strokeWidth={1} size={18}/> Delete note
                    </button>
                </div>
            )}
        </div>
    );
};

export default NoteMenu;