import { render } from "@test";

import { ClapperBoardCard } from "./index";

describe("<ClapperBoardCard />", () => {
    it("renders without crashing", () => {
        const component = render(<ClapperBoardCard title="Test" description="Something" />);

        expect(component).toBeTruthy();
    });

    it("renders the text given by props successfully", () => {
        const testTitle = "Test";
        const testDescription = "Something";
        
        const { getByText } = render(<ClapperBoardCard title={testTitle} description={testDescription} />);

        getByText(testTitle);
        getByText(testDescription);
    });
});
