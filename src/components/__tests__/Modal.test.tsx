import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../ui/Modal";
import { Note } from "@/types/types";
import React from "react";

describe("Modal", () => {
    const modalChildren = <section aria-label="test content">"This is the content"</section>

    it("renders when isOpen is true", () => {
        render(
            <Modal
                isOpen={true}
                onClose={() => { }}
            >
                {modalChildren}
            </Modal>
        );

        expect(screen.getByLabelText("close modal")).toBeInTheDocument();
    });

    it("doesn't render when isOpen is false", () => {
        render(
            <Modal
                isOpen={false}
                onClose={() => { }}
            >
                {modalChildren}
            </Modal>
        );

        expect(screen.queryByLabelText("close modal")).not.toBeInTheDocument;
    });

    it("shows children correctly when modal is open", () => {
        render(
            <Modal
                isOpen={true}
                onClose={() => { }}
            >
                {modalChildren}
            </Modal>
        );

        expect(screen.getByLabelText("test content")).toBeInTheDocument;
    });

    it("calls onClose function when close button is clicked", async () => {
        const onCloseMock = jest.fn();
        render(
            <Modal
                isOpen={true}
                onClose={() => { }}
            >
                {modalChildren}
            </Modal>
        );

        expect(screen.getByLabelText("close modal")).toBeInTheDocument();

        const user = userEvent.setup();
        const closeButton = screen.getByLabelText("close modal");
        await user.click(closeButton);

        expect(onCloseMock).toHaveBeenCalled;
    });
});