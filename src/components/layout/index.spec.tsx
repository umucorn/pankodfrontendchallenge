import { render } from "@test";
import "@testing-library/jest-dom/extend-expect";

import { Layout } from "./index";

jest.mock('../header/index.tsx', () => ({
    Header: () => (<div data-testid="header" />),
}));

jest.mock('../footer/index.tsx', () => ({
    Footer: () => (<div data-testid="footer" />),
}));

describe("<Layout />", () => {
    it("renders without crashing", () => {    
        render(<Layout />);
    });

    it("renders given children successfully", () => {
        const childrenText = "Some test content";

        const { getByText } = render(
            <Layout>
                {childrenText}
            </Layout>
        );

        getByText(childrenText);
    });

    it("renders header and footer successfully", () => {
        const { getByTestId } = render(<Layout />);

        expect(getByTestId("header")).toBeInTheDocument();
        expect(getByTestId("footer")).toBeInTheDocument();
    });
});
