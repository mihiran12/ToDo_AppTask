import { render , screen } from "@testing-library/react";
import CheckmarkButton from "./CheckmarkButton";
import { expect } from "vitest";
import user from '@testing-library/user-event'

describe('checkmark' , () => {
    it('render checkmark button correctly' , () => {
        render(<CheckmarkButton/>)
        const checkmarkButtonElement = screen.getByRole('button' , { name : "✓"});
        expect(checkmarkButtonElement).toBeInTheDocument();
    })

    it('called handleCheckmark function correctly' , async ()=>{
        user.setup()
        const checkmarkHandler = vi.fn()
        render(<CheckmarkButton
            handleCheckmark = {checkmarkHandler}
        />)
        const checkmarkButtonElement = screen.getByRole('button' , { name : "✓"});
        await user.click(checkmarkButtonElement)
        expect(checkmarkHandler).toHaveBeenCalledTimes(1)
    })
})