import { fireEvent, render , screen , waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import UserInput from "./UserInput";
import CheckmarkButton from "../checkmarkButton/CheckmarkButton";


describe('UserInput' , ()=>{

   it('progressbar render correctly' , ()=>{
        render(<UserInput inputValue={[]} doneInputs={[]}/>)
        const progressTextElement = screen.getByText("0% Completed");
        expect(progressTextElement).toBeInTheDocument();
    })

    it('initial input feild render correctly' , ()=>{
        render(<UserInput/>)
        const userInputElement = screen.getAllByRole('textbox')
        expect(userInputElement.length).toBe(1)
    })

    it('checkmark button render correctly' , ()=>{
        render(<CheckmarkButton/>)
        const checkmarkButtonElement = screen.getByRole('button' , { name : "✓"});
        expect(checkmarkButtonElement).toBeInTheDocument();
    })

    it('remove button render correctly' , () => {
        render(<UserInput/>);
        const removeButtonElement = screen.getByRole('button' , {name : "×"})
        expect(removeButtonElement).toBeInTheDocument();
    })

    it('Note button render correctly' , () => {
        render(<UserInput/>)
        const noteButtonElement = screen.getByRole('button' , {name : "🕮"})
        expect(noteButtonElement).toBeInTheDocument();
    })

    it('adds a new input when Enter is pressed' , async ()=>{
        render(<UserInput/>)
        const userInputElement = screen.getByRole('textbox')
        fireEvent.change(userInputElement , {target : {value : "task 01"}})
        fireEvent.keyDown(userInputElement,{key: "Enter"});
        const userInputElements = screen.getAllByRole('textbox');
        expect(userInputElements.length).toBe(2);
  });

    it('disappear input feild when remove button clicked' , ()=>{
        render(<UserInput/>)
        const userInputElement = screen.getByRole('textbox')

        fireEvent.change(userInputElement , {target : {value : "task 01"}})
        fireEvent.keyDown(userInputElement,{key: "Enter"});

        const removeButtonElement = screen.getAllByRole('button' , {name : "×"})

        fireEvent.click(removeButtonElement[0])

        const userInputElements = screen.getAllByRole('textbox')
        expect(userInputElements.length).toBe(1)

    })

    it('check line-through style when click checkMark Button' , ()=>{
        render(<UserInput/>)    
        const userInputElement = screen.getByRole('textbox')
        fireEvent.change(userInputElement , {target : {value : "task 01"}})

        const checkmarkButtonElement = screen.getByRole('button' , { name : "✓"});
        fireEvent.click(checkmarkButtonElement)
        expect(userInputElement).toHaveClass("done")
    })


})