import { fireEvent, render , screen } from "@testing-library/react";
import NoteButton from "./NoteButton";
import { describe, expect, vi } from "vitest";
import user, { userEvent } from '@testing-library/user-event'


describe('Note Section' , () => {
    it('Note button render correctly' , () => {
        render(<NoteButton/>)
        const noteButtonElement = screen.getByRole('button' , {name : "🕮"})
        expect(noteButtonElement).toBeInTheDocument();
    })

    it('text area is not rendered' , () => {
        render(<NoteButton/>)
        const textareaElement = screen.queryByRole('textbox');
        expect(textareaElement).not.toBeInTheDocument();
    })

    it('text area rendered' , () => {
        render(<NoteButton/>)
        const noteButtonElement = screen.getByRole('button' , {name : "🕮"})
        fireEvent.click(noteButtonElement);    
        const textareaElement = screen.getByRole('textbox');
        fireEvent.change(textareaElement , {target : {value : "task 01"}})
        expect(textareaElement).toBeInTheDocument();
    })

    it('text area title rendered' , () => {
        render(<NoteButton/>)
        const noteButtonElement = screen.getByRole('button' , {name : "🕮"})
        fireEvent.click(noteButtonElement);    
        const textAreaTitleElement = screen.getByText("Special Note")
        expect(textAreaTitleElement).toBeInTheDocument();
    })

    it('text area disappear when enter key press' , () => {
        render(<NoteButton/>)
        const noteButtonElement = screen.getByRole('button' , {name : "🕮"})
        fireEvent.click(noteButtonElement);
        const textareaElement = screen.getByRole('textbox');
        fireEvent.keyDown(textareaElement,{key: "Enter"});
        expect(textareaElement).not.toBeInTheDocument();
    })

    
})

