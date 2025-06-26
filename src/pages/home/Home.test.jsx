import { describe, expect } from "vitest";
import Home from "./Home";
import { render , screen } from "@testing-library/react";


describe('Home' , ()=>{
    it('title component render correctly' , ()=>{
        render(<Home/>)
        const titleElement = screen.getByRole("heading")
        expect(titleElement).toBeInTheDocument();
    })

    it('UserInput component render correctly' , ()=>{
        render(<Home/>)
        const userInputElement = screen.getByRole('textbox')
        expect(userInputElement).toBeInTheDocument();
    })

    it('Footer component render correctly' , ()=>{
        const currentYear = new Date().getFullYear();
        render(<Home/>)
        const footerElement = screen.getByText(`© ${currentYear} All rights reserved.`)
        expect(footerElement).toBeInTheDocument()
    })
})