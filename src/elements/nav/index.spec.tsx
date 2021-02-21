import { fireEvent, render } from "@test";

import { Nav } from "./index";

describe("<Nav />", () => {
    it("renders without crashing", () => {
        const component = render(
            <Nav>
                <a href="/">Test</a>
                <a href="https://www.google.com">Google</a>
            </Nav>
        );

        expect(component).toBeTruthy();
    });

    it("renders children in li tags", () => {
        const component = render(
            <Nav>
                <a href="/">Test</a>
                <a href="https://www.google.com">Google</a>
            </Nav>
        );

        expect(component.getByText("Test").parentElement.tagName).toBe("LI");
        expect(component.getByText("Google").parentElement.tagName).toBe("LI");
    });
});
