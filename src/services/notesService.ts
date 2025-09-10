import { NewNote, Note } from "@/types/types";

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch("/api/notes");
  return response.json();
};

export const createNote = async (note: NewNote): Promise<Note> => {
  const response = await fetch("/api/notes", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(note)
  });

  return response.json();
};

export const deleteNote = async (id: Number): Promise<Number> => {
  const response = await fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    credentials: 'include'
  });

  return response.status;
};

export const editNote = async ({ id, title, content }: Partial<Note>): Promise<Note> => {
  const response = await fetch(`/api/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ title, content })
  });

  return response.json();
};

export const changeNoteColor = async (id: Number, color: string): Promise<Note> => {
  const response = await fetch(`/api/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ color })
  });

  return response.json();
};

