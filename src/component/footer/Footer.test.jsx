import { render , screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import Footer from "./Footer";

describe('Footer' , () => {
    it('render current year and text correctly' , () => {
        const currentYear = new Date().getFullYear();
        render(<Footer/>)
        const footerElement = screen.getByText(`© ${currentYear} All rights reserved.`)
        expect(footerElement).toBeInTheDocument()
    })
})