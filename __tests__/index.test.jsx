import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const introText = screen.getByText(/Get started by editing/i);

        expect(introText).toBeInTheDocument();
    });
});
