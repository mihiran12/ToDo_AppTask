import { describe } from "vitest";
import App from "./App";
import { render , screen } from "@testing-library/react";

describe('App' , ()=>{
    it('App render correctly' , () =>{
        render(<App/>)
        const titleElement = screen.getByRole("heading")
        expect(titleElement).toBeInTheDocument();
    })
})