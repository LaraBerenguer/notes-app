import NotesList from "@/components/NotesList";
import styles from "./page.module.css";
import CreateNoteForm from "@/components/CreateNote";
import Filter from "@/components/Filter";
import { getNotes } from "../services/notesService";
import NotesInit from "@/components/NotesInit";

export default async function Home() {
  const notes = await getNotes();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CreateNoteForm />
        <Filter />
        <NotesInit notes={notes} />
        <NotesList />
      </main>
    </div>
  );
};