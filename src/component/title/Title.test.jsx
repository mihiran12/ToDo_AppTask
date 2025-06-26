import { render , screen} from "@testing-library/react"
import Title from "./Title"
import { expect } from "vitest";

describe('title' , ()=>{
    it('render title text' , () => {
        render(<Title/>);
        const titleElement = screen.getByText('To-Do App');
        expect(titleElement).toBeInTheDocument();
    })
})