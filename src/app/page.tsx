import NotesList from "@/components/notes_content/NotesList";
import styles from "./page.module.css";
import CreateNoteForm from "@/components/notes_forms/CreateNote";
import Filter from "@/components/filter/Filter";
import { getNotes } from "../services/notesService";
import NotesInit from "@/components/init/NotesInit";
import DarkModeToggler from "@/components/ui/ThemeToggler";

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