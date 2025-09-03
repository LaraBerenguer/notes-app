import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteCard from "../notes_content/NoteCard";
import { Note } from "@/types/types";
import React from "react";

/*jest.mock("../NoteMenu", () => {
    return function MockNoteMenu() {
        return <div data-testid="note-menu">Mocked Menu</div>;
    };
});*/

describe("NoteCard", () => {
    const note: Note = {
        id: 1,
        title: "Test title",
        content: "This is the content of the note",
        color: "default",
        important: false,
    };


    const editedNote: Partial<Note> = {
        id: 1,
        title: "Test edited title",
        content: "Edited content",
    };

    it("renders the note title and content", () => {
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onDelete={() => { }}
                onEdit={() => { }}
                onChangeColor={() => { }}
            />
        );

        expect(screen.getByText("Test title")).toBeInTheDocument();
        expect(screen.getByText("This is the content of the note")).toBeInTheDocument();
    });

    //note menu renders when clicking on the button
    it("shows note menu dropdown when clicking on menu button", async () => {
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onEdit={() => { }}
                onDelete={() => { }}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);

        expect(screen.getByLabelText("edit note")).toBeInTheDocument();
        expect(screen.getByLabelText("delete note")).toBeInTheDocument();
        expect(screen.getByLabelText("change background color")).toBeInTheDocument();
    });

    //input and text area apear when clicking on edit button
    it("shows input and text area when clicking the edit button", async () => {
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onDelete={() => { }}
                onEdit={() => { }}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);
        const editButton = screen.getByLabelText("edit note");
        await user.click(editButton);

        expect(screen.getByLabelText("Edit note title")).toBeInTheDocument();
        expect(screen.getByLabelText("Edit note content")).toBeInTheDocument();
    });

    //saving edit calls onEdit function with correct data
    it("save edit button calls onEdit funcion with the correct data", async () => {
        const onEditMock = jest.fn();
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onDelete={() => { }}
                onEdit={onEditMock}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);
        const editButton = screen.getByLabelText("edit note");
        await user.click(editButton);

        //input edited note
        const titleInput = screen.getByLabelText("Edit note title");
        const contentInput = screen.getByLabelText("Edit note content");
        await user.clear(titleInput);
        await user.type(titleInput, editedNote.title ?? note.title);
        await user.clear(contentInput);
        await user.type(contentInput, editedNote.content ?? note.content);

        //save edit button
        const saveEditButton = screen.getByLabelText("Save edit note");
        await user.click(saveEditButton);

        expect(onEditMock).toHaveBeenCalledWith(editedNote.id, {
            title: editedNote.title,
            content: editedNote.content,
        });
    });

    //deleting a note shows confirmation modal
    it("shows confirmation modal when pressing delete note button", async () => {
        const onDeleteMock = jest.fn();
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onEdit={() => { }}
                onDelete={onDeleteMock}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);
        const deleteButton = screen.getByLabelText("delete note");
        await user.click(deleteButton);

        expect(screen.getByLabelText("close modal")).toBeInTheDocument();
    });

    //confirming deletion calls onDelete function with correct id
    it("confirm delete note calls onDelete funcion with correct id", async () => {
        const onDeleteMock = jest.fn();
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onEdit={() => { }}
                onDelete={onDeleteMock}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);
        const deleteButton = screen.getByLabelText("delete note");
        await user.click(deleteButton);

        expect(screen.getByLabelText("close modal")).toBeInTheDocument();

        //confirm delete button
        const confirmDeleteButton = screen.getByLabelText("confirm delete");
        await user.click(confirmDeleteButton);

        expect(onDeleteMock).toHaveBeenCalledWith(note.id);
    });

    //accesibility
    it("edit fields have correct placeholders and are accessible", async () => {
        render(
            <NoteCard
                note={note}
                onClick={() => { }}
                onDelete={() => { }}
                onEdit={() => { }}
                onChangeColor={() => { }}
            />
        );
        const user = userEvent.setup();
        const menuButton = screen.getByLabelText("Opciones");
        await user.click(menuButton);
        const editButton = screen.getByLabelText("edit note");
        await user.click(editButton);

        //verify placeholders
        const titleInput = screen.getByLabelText("Edit note title");
        const contentInput = screen.getByLabelText("Edit note content");
        expect(titleInput).toHaveAttribute("placeholder", "Test title");
        expect(contentInput).toHaveAttribute("placeholder", "This is the content of the note");

        //verify role
        expect(titleInput).toHaveAttribute("type", "text");
        expect(contentInput.tagName.toLowerCase()).toBe("textarea");
    });
});
