import { render } from "@test";

import { Cards } from "./index";

describe("<Cards />", () => {
    it("renders without crashing", () => {
        const component = render(<Cards />);

        expect(component).toBeTruthy();
    });

    it("successfully renders given children", () => {
        const childrenText = "Some test content";

        const { getByText } = render(
            <Cards>
                {childrenText}
            </Cards>
        );

        getByText(childrenText);
    });
});
