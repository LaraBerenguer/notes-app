import { Note } from "@/types/types";

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch("http://localhost:3001/notes");
  return response.json();
};

export const createNote = async (note: Note): Promise<Note> => {
  const response = await fetch("http://localhost:3001/notes", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  });
  
  return response.json();
};

