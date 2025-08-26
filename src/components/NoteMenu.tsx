import { MoreVertical, Palette, Pencil, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

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

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        strategy: "fixed",
        middleware: [offset(4), flip(), shift()],
    });

    return (
        <div ref={menuRef} className="relative flex items-center">
            <button
                ref={refs.setReference}
                aria-label="Opciones"
                onClick={e => { e.stopPropagation(); setOpen(!open); }}
                className="ml-2 flex items-center justify-center"
            >
                <MoreVertical strokeWidth={1} size={18} />
            </button>
            {open && (
                <div
                    ref={refs.setFloating}
                    style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
                    className="bg-white rounded shadow-md"
                >
                    <button
                        className="px-4 py-2 text-left flex gap-2 hover:bg-gray-100 w-full"
                        onClick={e => { e.stopPropagation(); setOpen(false); onEdit(); }}
                    >
                        <Trash strokeWidth={1} size={18} /> Edit note
                    </button>
                    <button
                        className="px-4 py-2 text-left flex gap-2 whitespace-nowrap hover:bg-gray-100 text-red-600 w-full"
                        onClick={e => { e.stopPropagation(); setOpen(false); onDelete(); }}
                    >
                        <Pencil strokeWidth={1} size={18} /> Delete note
                    </button>
                    <button
                        className="px-4 py-2 text-left flex gap-2 whitespace-nowrap hover:bg-gray-100 w-full"
                        onClick={e => { e.stopPropagation(); setOpen(false); onDelete(); }}
                    >
                        <Palette strokeWidth={1} size={18} /> Change color
                    </button>
                </div>
            )}
        </div>
    );
};

export default NoteMenu;