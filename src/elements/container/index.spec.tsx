import { render } from "@test";
import '@testing-library/jest-dom/extend-expect'

import { Container } from "./index";

describe("<Container />", () => {
    it("renders without crashing", () => {
        const component = render(<Container />);

        expect(component).toBeTruthy();
    });

    it("renders children without crashing", () => {
        const component = render(
            <Container>
                <span>a</span>
                <span>b</span>
            </Container>
        );

        expect(component.getByText("a")).toBeTruthy();
        expect(component.getByText("b")).toBeTruthy();
    });

    it("renders className successfully", () => {
        const component = render(
            <Container className="test-classname">
                test
            </Container>
        );

        expect(component.getByText("test")).toHaveClass("test-classname");
    });
});
