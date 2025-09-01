import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteCard from "../NoteCard";
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
    //note menu renders when clicking on the button
    //accesibility
});
