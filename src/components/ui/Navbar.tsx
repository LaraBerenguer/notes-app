"use client"
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { user_set, user_cleared } from "@/reducers/userReducer";
import type { RootState } from "@/store/store";
import Login from "../auth/Login";
import Image from "next/image";

const Navbar = () => {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.value);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            dispatch(user_set({
                id: (session.user as any).id ?? session.user.email,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
            }));
        } else {
            dispatch(user_cleared());
        }
    }, [status, session, dispatch]);

    return (
        <nav className="w-full px-4 py-2 flex items-center justify-between bg-white dark:bg-[#202124] text-[#171717] dark:text-[#e8eaed]">
            <div className="text-lg font-bold">Notes App</div>
            <div className="flex items-center gap-3">
                {status === "authenticated" && user ? (
                    <>
                        <Image
                            src={user.image ?? "/default-profile.png"}
                            alt="Profile picture"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="hidden sm:inline">{user.name ?? user.email}</span>
                        <button onClick={() => signOut()} aria-label="sign out" className="px-2 py-1 border rounded">Sign out</button>
                    </>
                ) : (
                    <Login />
                )}
            </div>
        </nav>
    );
};

export default Navbar;