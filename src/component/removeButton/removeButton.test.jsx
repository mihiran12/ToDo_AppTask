import { describe, expect } from "vitest";
import RemoveButton from "./RemoveButton";
import { render , screen } from "@testing-library/react";

describe('remove section' , ()=>{
    it('remove button render correctly' , () => {
        render(<RemoveButton/>);
        const removeButtonElement = screen.getByRole('button' , {name : "×"})
        expect(removeButtonElement).toBeInTheDocument();
    })
})