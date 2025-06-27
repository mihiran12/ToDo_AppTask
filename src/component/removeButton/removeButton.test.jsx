import { describe, expect } from "vitest";
import RemoveButton from "./RemoveButton";
import { render , screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import { vi } from "vitest";

describe('remove section' , ()=>{
    it('remove button render correctly' , () => {
        render(<RemoveButton/>);
        const removeButtonElement = screen.getByRole('button' , {name : "×"})
        expect(removeButtonElement).toBeInTheDocument();
    })

    it('remove handler called correctly' , async () => {
        user.setup();
        const removeHandler = vi.fn()
        render(<RemoveButton 
            handleRemove = {removeHandler}
        />);
        const removeButtonElement = screen.getByRole('button' , {name : "×"})
        await user.click(removeButtonElement)
        expect(removeHandler).toHaveBeenCalledTimes(1)
    })
})