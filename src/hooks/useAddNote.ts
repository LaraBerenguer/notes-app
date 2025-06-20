import { store } from "@/store";

const useAddNote = () => {
    const getRandomId = () => {
        return Math.floor(Math.random() * 99999);
    }

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const noteInput = form.elements.namedItem("note") as HTMLInputElement;
        const note = noteInput.value;

        store.dispatch({
            type: "notes_toggle_importance",
            payload: {
                id: getRandomId(),
                important: false,
                content: note
            }
        });
    };
};

export default useAddNote;

