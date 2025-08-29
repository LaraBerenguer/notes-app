import { NewNote, Note } from "@/types/types";

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch("http://localhost:3000/api/notes");
  return response.json();
};

export const createNote = async (note: NewNote): Promise<Note> => {
  const response = await fetch("http://localhost:3000/api/notes", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  });

  return response.json();
};

export const deleteNote = async (id: Number): Promise<Number> => {
  const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'DELETE'
  });

  return response.status;
};

export const editNote = async (id: Number, { title, content }: Partial<Note>): Promise<Note> => {
  const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, content })
  });

  return response.json();
};

export const changeNoteColor = async (id: Number, color: string): Promise<Note> => {
  const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ color })
  });

  return response.json();
};

