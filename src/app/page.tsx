import NotesList from "@/components/NotesList";
import styles from "./page.module.css";
import CreateNoteForm from "@/components/CreateNote";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CreateNoteForm />
        <NotesList />
      </main>
    </div>
  );
};