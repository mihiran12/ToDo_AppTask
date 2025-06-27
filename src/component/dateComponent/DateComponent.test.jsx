import { describe, expect } from "vitest";
import DateComponent from "./DateComponenet";
import { render , screen } from "@testing-library/react";

describe('date component' , ()=>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    it('render date correctly' , ()=>{
        render(<DateComponent/>)
        const dateElement = screen.getByText(date)
        expect(dateElement).toBeInTheDocument();

    })
})