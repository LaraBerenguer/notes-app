"use client"
import { notes_init } from "@/reducers/noteReducer";
import { Note } from "@/types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useNotesInit = (notes: Note[]) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(notes_init(notes))
    }, []);
};

export default useNotesInit;