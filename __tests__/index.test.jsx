import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Home from "src/app/page";
import Header from "@/pages/Header";

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const introText = screen.getByText(/Get started by editing/i);

        expect(introText).toBeInTheDocument();
    });
});

describe("Header", () => {
    it("renders homepage link", () => {
        render(<Header />);

        const homepageLinkElement = screen.getByText(/AME-UI/i).closest("a");
        expect(homepageLinkElement).toHaveAttribute(
            "href",
            "https://www.test.com"
        );
    });

    it("renders search", () => {
        render(<Header />);

        const searchInputElement = screen
            .getByPlaceholderText(/search/i)
            .closest("input");

        expect(searchInputElement).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(<Header />);

        const linkToComponents = screen.getByText(/components/i).closest("a");
        const linkToDesign = screen.getByText(/design/i).closest("a");
        const linkToDevelopment = screen.getByText(/development/i).closest("a");

        const links = [linkToComponents, linkToDesign, linkToDevelopment];

        links.forEach((link) => {
            expect(link).toBeInTheDocument();
        });
    });

    it("renders version manager", () => {
        // TBD
    });

    it("renders language dropdown", () => {
        render(<Header />);

        const languageSelectDropdown = screen.getByRole("button");

        it("loads language select icon", () => {
            expect(languageSelectDropdown).toBeInTheDocument();
        });

        it("runs a callback onclick", () => {
            expect(languageSelectDropdown.click());
        });

        // Maybe:
        it("test click event", () => {
            const mockCallBack = jest.fn();

            const button = shallow(<Button onClick={mockCallBack} />);

            button.find("button").simulate("click");

            expect(mockCallback.mock.calls.length.toEqual(1));
        });
    });

    it("renders github repo link", () => {
        const githubLink = screen.getByRole("button", {
            name: /github/i,
        });

        expect(githubLink).toBeInTheDocument();
    });

    describe("header mobile view port", () => {
        global.innerWidth = 320;
        global.innerHeight = 568;

        global.dispatchEvent(new Event("resize"));

        it("renders logo with homepage link", () => {
            render(<Header />);

            const homepageLinkElement = screen
                .getByText(/AME-UI/i)
                .closest("a");

            expect(homepageLinkElement).toHaveAttribute(
                "href",
                "https://www.test.com"
            );
        });

        it("renders sidebar icon", () => {
            render(<Header />);

            const sidebarIcon = screen.getByRole("button", {
                name: /sidebar/i,
            });

            expect(sidebarIcon).toBeInTheDocument();
        });

        it("open sidebar icon on click", () => {
            const mockCallback = jest.fn();

            render(<Sidebar onClick={mockCallback} />);

            expect(mockCallback.mock.calls.length.toEqual(1));
        });
    });
});
