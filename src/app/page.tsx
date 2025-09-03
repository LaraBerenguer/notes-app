import NotesList from "@/components/NotesList";
import styles from "./page.module.css";
import CreateNoteForm from "@/components/CreateNote";
import Filter from "@/components/Filter";
import { getNotes } from "../services/notesService";
import NotesInit from "@/components/NotesInit";
import DarkModeToggler from "@/components/ThemeToggler";

export default async function Home() {
  const notes = await getNotes();
  return (
    <div className={`${styles.page} bg-white dark:bg-[#202124] text-[#171717] dark:text-[#e8eaed]`}>
      <main className={styles.main}>
        <DarkModeToggler />
        <CreateNoteForm />
        <Filter />
        <NotesInit notes={notes} />
        <NotesList />
      </main>
    </div>
  );
};