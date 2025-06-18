import styles from "./page.module.css";
import { store } from "../store/index";
import { Note } from "@/types/types";

export default function Home() {
  const state: Note[] = store.getState();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {state.map(note => {
          return <li key={note.id}>
            {note.content}
            <b>{note.important ? " (important)" : ""}</b>
          </li>
        })}
      </main>
    </div>
  );
};