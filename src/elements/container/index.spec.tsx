import { fireEvent, render } from "@test";

import { Container } from "./index";

describe("<Container />", () => {
    it("renders without crashing", () => {
        const component = render(<Container />);

        expect(component).toBeTruthy();
    });
});
