import { render, screen } from "@testing-library/react";
import NoteCard from "../NoteCard";
import { Note } from "@/types/types";
import React from "react";

jest.mock("../NoteMenu", () => {  
  return function MockNoteMenu() {
    return <div data-testid="note-menu">Mocked Menu</div>;
  };
});

describe("NoteCard", () => {
  const note: Note = {
    id: 1,
    title: "Test title",
    content: "This is the content of the note",
    color: "default",
    important: false,
  };

  it("renders the note title and content", () => {
    render(
      <NoteCard
        note={note}
        onClick={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
        onChangeColor={() => {}}
      />
    );

    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("This is the content of the note")).toBeInTheDocument();
  });
});
