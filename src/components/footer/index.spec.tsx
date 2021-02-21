import { render } from "@test";

import { Footer } from "./index";

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });

    it("successfully renders internal links", () => {
        const { getByText } = render(<Footer />);

        expect(getByText("Home")).toBeTruthy();
        expect(getByText("Terms and Conditions")).toBeTruthy();
        expect(getByText("Privacy Policy")).toBeTruthy();
        expect(getByText("Collection Statement")).toBeTruthy();
        expect(getByText("Manage Account")).toBeTruthy();
    });

    it("successfully renders external links", () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId("facebook-link").getAttribute("href")).toStrictEqual(
            "https://www.facebook.com/",
        );

        expect(getByTestId("twitter-link").getAttribute("href")).toStrictEqual(
            "https://twitter.com/",
        );
        
        expect(getByTestId("instagram-link").getAttribute("href")).toStrictEqual(
            "https://www.instagram.com/",
        );

        expect(getByTestId("appstore-link").getAttribute("href")).toStrictEqual(
            "https://www.apple.com/app-store/",
        );

        expect(getByTestId("googleplay-link").getAttribute("href")).toStrictEqual(
            "https://play.google.com/",
        );

        expect(getByTestId("microsoft-link").getAttribute("href")).toStrictEqual(
            "https://www.microsoft.com/tr-tr/",
        );
    });
});
