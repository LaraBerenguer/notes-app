import Filter from "../filter/Filter";
import CreateNoteForm from "../notes_forms/CreateNote";
import styles from "@/app/page.module.css";

const Toolbar = () => {
    return (
        <section className={`${styles.toolbar} bg-white dark:bg-[#202124] text-[#171717] dark:text-[#e8eaed]`}>
            <CreateNoteForm />
            <Filter />
        </section>
    );
};

export default Toolbar;