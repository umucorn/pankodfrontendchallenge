import { render } from "@test";
import "@testing-library/jest-dom/extend-expect";

import { ImageCard } from "./index";

describe("<ImageCard />", () => {
    it("renders without crashing", () => {
        const component = render(<ImageCard imageUrl="Test" description="Something" />);

        expect(component).toBeTruthy();
    });

    it("renders without crashing", () => {
        const testImageUrl = "https://source.unsplash.com/random";
        const testDescription = "Something";
        
        const { getByTestId, getByText } = render(<ImageCard imageUrl={testImageUrl} description={testDescription} />);

        expect(getByTestId("image")).toHaveProperty("src", testImageUrl);
        getByText(testDescription);
    });
});
