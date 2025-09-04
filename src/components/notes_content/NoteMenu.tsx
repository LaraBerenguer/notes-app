import { MoreVertical, Palette, Pencil, Trash } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

type NoteMenuProps = {
    onEdit: () => void;
    onDelete: () => void;
    onChangeColor: (color: string) => void;
};

const NoteMenu = ({ onEdit, onDelete, onChangeColor }: NoteMenuProps) => {
    const colorOptions = [
        { color: "#F6C445", label: "Yellow" },
        { color: "#FF99C8", label: "Pink" },
        { color: "#8BC34A", label: "Green" },
        { color: "#4FC3F7", label: "Blue" },
        { color: "transparent", label: "None" },
    ];

    const menuItems = [
        {
            label: "Edit note",
            icon: <Pencil strokeWidth={1} size={18} />,
            onClick: onEdit,
            ariaLabel: "edit note",
        },
        {
            label: "Delete note",
            icon: <Trash strokeWidth={1} size={18} />,
            onClick: onDelete,
            ariaLabel: "delete note",
            className: "text-red-600",
        },
        {
            label: "Change color",
            icon: <Palette strokeWidth={1} size={18} />,
            ariaLabel: "change background color",
            subMenuItems: colorOptions.map((option) => ({
                label: option.label,
                className: "flex items-center gap-2",
                onClick: () => onChangeColor(option.color),
                icon: (
                    <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: option.color }}
                    />
                ),
            })),
        },
    ];

    return (
        <DropdownMenu
            trigger={<MoreVertical strokeWidth={1} size={18} />}
            items={menuItems}
        />
    );
};

export default NoteMenu;