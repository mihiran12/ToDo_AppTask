import { render , screen } from "@testing-library/react";
import CheckmarkButton from "./CheckmarkButton";
import { expect } from "vitest";

describe('checkmark' , () => {
    it('render button' , () => {
        render(<CheckmarkButton/>)
        const checkmarkButtonElement = screen.getByRole('button' , { name : "✓"});
        expect(checkmarkButtonElement).toBeInTheDocument();
    })
})