"use client"
import { useState, useRef, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

export default function SignUp() {
    const [open, setOpen] = useState(false);
    const { x, y, refs, strategy } = useFloating({
        placement: "bottom-start",
        middleware: [offset(6), flip(), shift()],
    });

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
        <div ref={menuRef} className="relative">
            <button
                ref={refs.setReference}
                onClick={() => setOpen((isOpen) => !isOpen)}
                className="px-3 py-1 rounded-lg border-1 border-gray-100 bg-white dark:bg-[#202124] hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                aria-label="Sign up"
            >
                Sign In
            </button>
            {open && (
                <div
                    ref={refs.setFloating}
                    style={{ position: strategy, top: y ?? 0, left: x ?? 0, zIndex: 1000 }}
                    className="flex flex-col bg-white dark:bg-[#202124] rounded shadow-md border border-gray-100 dark:border-gray-600 mt-2 min-w-[160px]"
                >
                    <button
                        className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition whitespace-nowrap"
                        onClick={() => { signIn("github"); setOpen(false); }}
                    >
                        Sign in with GitHub
                    </button>
                    <button
                        className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition whitespace-nowrap"
                        onClick={() => { signIn("google"); setOpen(false); }}
                    >
                        Sign in with Google
                    </button>
                </div>
            )}
        </div>
    );
}