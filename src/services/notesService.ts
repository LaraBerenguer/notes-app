import { Note } from "@/types/types";

const getNotes = async (): Promise<Note[]> => {
  const response = await fetch("http://localhost:3001/notes");
  return response.json();
}

export default getNotes;