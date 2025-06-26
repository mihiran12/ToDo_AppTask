import {render , screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar"
import { expect } from "vitest";


describe('ProgressBar' , () =>{
    it('render 0% when there are no task' , ()=>{
        render(<ProgressBar inputValue={[]} doneInputs={[]}/>)
        const progressTextElement = screen.getByText("0% Completed");
        expect(progressTextElement).toBeInTheDocument();
    })

    it('calculate and display correct progress' , () => {
        const inputValue = ["task 1" , "task 2" , "task 3" , "task 4"]
        const doneInputs = [true , false , false , true]

        render(<ProgressBar inputValue={inputValue} doneInputs={doneInputs}/>)
        const progressFillElement = screen.getByText("50% Completed")
        expect(progressFillElement).toBeInTheDocument();
    })

    it('render 100% when all tasks completed' , ()=>{
        const inputValue = ["task 1" , "task 2"]
        const doneInputs = [true , true]

        render(<ProgressBar inputValue={inputValue} doneInputs={doneInputs}/>)
        const progressCompletedFillElement = screen.getByText("100% Completed")
        expect(progressCompletedFillElement).toBeInTheDocument();
    })
})