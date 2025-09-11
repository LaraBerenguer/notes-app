"use client"
import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <div className="flex flex-col items-center gap-3">
            <form className="px-3 py-1 rounded-lg border-2 border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                action={async () => {
                    await signIn("github")
                }}
            >
                <button type="submit">Signin with GitHub</button>
            </form>
            <form className="px-3 py-1 rounded-lg border-2 border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                action={async () => {
                    await signIn("google")
                }}
            >
                <button type="submit">Signin with Google</button>
            </form>
        </div>

    )
} 