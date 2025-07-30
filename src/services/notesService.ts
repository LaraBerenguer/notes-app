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

export const deleteNote = async (id: Number): Promise<Number> => {
  const response = await fetch(`http://localhost:3001/notes/${id}`, {
    method: 'DELETE'
  });
  
  return response.status;
};

