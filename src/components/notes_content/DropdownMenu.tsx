import { useState, useRef, useEffect, JSX } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

type MenuItem = {
    label: string;
    icon?: JSX.Element;
    onClick?: () => void;
    ariaLabel?: string;
    className?: string;
    subMenuItems?: MenuItem[]; // Submenu support
};

type DropdownMenuProps = {
    trigger: JSX.Element;
    items: MenuItem[];
    className?: string;
    menuClassName?: string;
};

const DropdownMenu = ({ trigger, items, className, menuClassName }: DropdownMenuProps) => {
    const [open, setOpen] = useState(false);
    const [subMenuOpenIndex, setSubMenuOpenIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        strategy: "fixed",
        middleware: [offset(4), flip(), shift()],
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
                setSubMenuOpenIndex(null);
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
        <div ref={menuRef} className={`relative ${className}`}>
            <div ref={refs.setReference} onClick={() => setOpen(!open)}>
                {trigger}
            </div>
            {open && (
                <div
                    ref={refs.setFloating}
                    style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
                    className={`bg-white dark:bg-[#202124] rounded shadow-md ${menuClassName}`}
                >
                    {items.map((item, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => {
                                    if (item.subMenuItems) {
                                        setSubMenuOpenIndex(index === subMenuOpenIndex ? null : index);
                                    } else {
                                        item.onClick?.();
                                        setOpen(false);
                                    }
                                }}
                                className={`px-4 py-2 text-left flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full ${item.className}`}
                                aria-label={item.ariaLabel || item.label}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                            {item.subMenuItems && subMenuOpenIndex === index && (
                                <div className="absolute flex bg-white dark:bg-[#202124] rounded shadow-md">
                                    {item.subMenuItems.map((subItem, subIndex) => (
                                        <section
                                            key={subIndex}
                                            className={`px-2 py-2 text-left flex gap-2`}
                                            aria-label={subItem.ariaLabel || subItem.label}
                                        >
                                            <button
                                                className={`${subItem.className} rounded-full border-2 border-gray-100 hover:cursor-pointer`}
                                                onClick={() => {
                                                    subItem.onClick?.();
                                                    setOpen(false);
                                                    setSubMenuOpenIndex(null);
                                                }}>
                                                {subItem.icon}
                                            </button>
                                        </section>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;